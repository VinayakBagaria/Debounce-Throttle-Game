import { useRef, useState } from 'react';
import Ball from './Ball';
import { customReqAnimFrame } from './helpers';
import * as CanvasStyles from './styles';

const BALL_COLOR = '#70CDFF';
const BALL_SIZE = 20;
const BALL_NUMBER = 10;

const WIDTH = 145;
const HEIGHT = 185;

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const balls = useRef<Array<Ball>>([]);
  const pixels = useRef(new Array(WIDTH * HEIGHT));

  function getContext() {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    return context;
  }

  function contextBallFilling(ballX: number, ballY: number) {
    const context = getContext();
    if (!context) {
      return;
    }
    context.beginPath();
    context.fillStyle = BALL_COLOR;
    context.arc(ballX, ballY, BALL_SIZE / 2, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
  }

  function loop() {
    const context = getContext();
    if (!context) {
      return;
    }
    pixels.current = new Array(WIDTH * HEIGHT);
    context.fillStyle = '#000';
    context.fillRect(0, 0, WIDTH, HEIGHT);

    for (let i = 0; i < BALL_NUMBER; i += 1) {
      const currentBall = balls.current[i];
      const ballPosition = currentBall.tick(pixels.current);
      pixels.current = ballPosition.pixels;
      contextBallFilling(ballPosition.x, ballPosition.y);
    }

    customReqAnimFrame(loop);
  }

  function handleButtonClick() {
    for (let i = 0; i < BALL_NUMBER; i += 1) {
      balls.current[i] = new Ball(WIDTH, HEIGHT);
    }
    loop();
    // setCurrentIndex(currentIndex + 1);
  }

  return (
    <CanvasStyles.Wrapper>
      <CanvasStyles.ButtonWrapper>
        <CanvasStyles.Button
          type="button"
          onClick={handleButtonClick}
          className="machine-button"
          aria-label="Throw a ball"
        />
      </CanvasStyles.ButtonWrapper>
      <CanvasStyles.Image src="vendingMachine.png" alt="Vending Machine" />
      <CanvasStyles.CanvasElement
        ref={canvasRef}
        width={WIDTH}
        height={HEIGHT}
      />
    </CanvasStyles.Wrapper>
  );
};

export default Canvas;
