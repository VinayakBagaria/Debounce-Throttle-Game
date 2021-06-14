import { useEffect, useRef } from 'react';
import Ball from './Ball';
import { customReqAnimFrame } from './helpers';

const BALL_COUNT = 100;
const BALL_NUMBER = 40;
const BALL_COLOR = '#70CDFF';
const BACK_COLOR = '#f9f9f9';
const GRAVITY_X = 0;
const GRAVITY_Y = 0.5;
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
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const width = window.innerWidth;
    const height = window.innerHeight;
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
      context!.fillStyle = BACK_COLOR;
      context!.fillRect(0, 0, width, height);

      for (let i = 0; i < BALL_NUMBER; i++) {
        const ballPosition = balls[i].tick(pixels);
        pixels = ballPosition.pixels;
        contextBallFilling(ballPosition.x, ballPosition.y);
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

  return <canvas ref={canvasRef}></canvas>;
};

export default Canvas;
