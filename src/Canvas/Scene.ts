import Ball from './Ball';
import { defaultSceneConfig, SceneConfigType } from './constants';
import { getRandomBallColor } from './utils';

class Scene {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private config: SceneConfigType;
  private balls: Array<Ball> = [];

  constructor(canvas: HTMLCanvasElement, config?: Partial<SceneConfigType>) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (context) {
      this.ctx = context;
    } else {
      throw new Error('Context not retrieved');
    }
    this.config = {
      ...defaultSceneConfig,
      ...config,
    };
    this.canvas.width = this.config.width;
    this.canvas.height = this.config.height;

    this.createBalls();
  }

  private createBalls() {
    const balls: Array<Ball> = [];

    for (let i = 0; i < this.config.ballCount; i++) {
      // random x, y positions
      const x = Math.random() * this.config.width;
      const y = Math.random() * this.config.height;

      const sceneForBall = {
        ...this.config,
      };

      const ballProps = {
        color: getRandomBallColor(),
      };

      const ballInstance = new Ball(x, y, sceneForBall, ballProps);
      balls.push(ballInstance);
    }

    this.balls = balls;
  }

  update() {
    // queue the next update
    window.requestAnimationFrame(() => this.update());

    // clear the canvas
    this.ctx.clearRect(0, 0, this.config.width, this.config.height);

    // update objects
    this.balls.forEach((eachBall) => eachBall.update());

    // draw objects
    this.balls.forEach((eachBall) => eachBall.draw(this.ctx));
  }
}

export default Scene;
