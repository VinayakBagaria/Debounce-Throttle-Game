import {
  SceneConfigType,
  BallConfigType,
  defaultBallConfig,
  defaultVelocityProps,
} from './constants';

class Ball {
  private x: number;
  private y: number;
  private ballProps: BallConfigType;
  private sceneProps: SceneConfigType;
  private velX: number;
  private velY: number;

  constructor(
    x: number,
    y: number,
    sceneProps: SceneConfigType,
    ballProps: Partial<BallConfigType>
  ) {
    this.x = x;
    this.y = y;
    this.sceneProps = sceneProps;

    this.ballProps = {
      ...defaultBallConfig,
      ...defaultVelocityProps,
      ...ballProps,
    };

    this.velX = this.ballProps.startVelX;
    this.velY = this.ballProps.startVelY;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = this.ballProps.color;
    ctx.arc(this.x, this.y, this.ballProps.radius / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  public update() {
    const { ballProps, sceneProps } = this;

    // floor
    if (this.y + ballProps.radius >= sceneProps.height) {
      // reverse direction and loose energy from bouncing
      this.velY *= -ballProps.bounce;
      // reset position
      this.y = sceneProps.height - ballProps.radius;
      // slow down ball's X velocity with friction
      this.velX *= sceneProps.friction;
    }

    // ceiling
    if (this.y - ballProps.radius <= 0) {
      this.velY *= -ballProps.bounce;
      this.y = ballProps.radius;
      this.velX *= sceneProps.friction;
    }

    // left wall
    if (this.x - ballProps.radius <= 0) {
      this.velX *= -ballProps.bounce;
      this.x = ballProps.radius;
    }

    // right wall
    if (this.x + ballProps.radius >= sceneProps.width) {
      this.velX *= -ballProps.bounce;
      this.x = sceneProps.width - ballProps.radius;
    }

    // reset insignificant amounts to 0
    if (this.velX < 0.01 && this.velX > -0.01) {
      this.velX = 0;
    }
    if (this.velY < 0.01 && this.velY > -0.01) {
      this.velY = 0;
    }

    // update position
    this.velY += sceneProps.gravity;
    this.x += this.velX;
    this.y += this.velY;
  }
}

export default Ball;
