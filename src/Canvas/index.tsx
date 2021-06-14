import { useEffect, useRef } from 'react';
import Ball from './Ball';
import { customReqAnimFrame } from './helpers';
import * as CanvasStyles from './styles';

const BALL_NUMBER = 10;
const BALL_COLOR = '#70CDFF';
const BACK_COLOR = '#f9f9f9';
const BALL_SIZE = 60;

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let balls: Array<Ball> = [];

    function contextBallFilling(ballX: number, ballY: number) {
      context!.beginPath();
      context!.fillStyle = BALL_COLOR;
      context!.arc(ballX, ballY, BALL_SIZE / 2, 0, Math.PI * 2, true);
      context!.closePath();
      context!.fill();
    }

    function loop() {
      let pixels = new Array(width * height);
      // background color
      context!.fillStyle = BACK_COLOR;
      context!.fillRect(0, 0, width, height);

      for (let i = 0; i < BALL_NUMBER; i++) {
        // const ballPosition = balls[i].tick(pixels);
        // pixels = ballPosition.pixels;
        // contextBallFilling(ballPosition.x, ballPosition.y);
      }

      customReqAnimFrame(loop);
    }

    setTimeout(() => {
      for (let i = 0; i < BALL_NUMBER; i++) {
        balls[i] = new Ball(width, height);
      }
      loop();
    }, 100);
  }, []);

  return (
    <CanvasStyles.Wrapper>
      {/* <canvas ref={canvasRef}></canvas> */}
      <CanvasStyles.Image src="vendingMachine.png" alt="Vending Machine" />
      <CanvasStyles.ButtonWrapper>
        <CanvasStyles.Button
          type="button"
          className="machine-button"
          aria-label="Throw a ball"
        />
      </CanvasStyles.ButtonWrapper>
    </CanvasStyles.Wrapper>
  );
};

export default Canvas;
