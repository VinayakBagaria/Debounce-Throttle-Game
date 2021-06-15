import {
  SceneConfigType,
  BallConfigType,
  defaultBallConfig,
} from './constants';

class Ball {
  private x: number;
  private y: number;
  private props: BallConfigType;
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

    const defaultVelocityProps = {
      startVelX:
        (Math.random() * 5 + 5) * (Math.floor(Math.random() * 2) || -1),
      startVelY:
        (Math.random() * 5 + 5) * (Math.floor(Math.random() * 2) || -1),
    };
    this.props = {
      ...defaultBallConfig,
      ...defaultVelocityProps,
      ...ballProps,
    };

    this.velX = this.props.startVelX;
    this.velY = this.props.startVelY;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = this.props.color;
    ctx.arc(this.x, this.y, this.props.radius / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  public update() {
    const { props, sceneProps } = this;

    // floor
    if (this.y + props.radius >= sceneProps.height) {
      this.velY *= -props.bounce;
      this.y = sceneProps.height - props.radius;
      this.velX *= sceneProps.friction;
    }

    // ceiling
    if (this.y - props.radius <= 0) {
      this.velY *= -props.bounce;
      this.y = props.radius;
      this.velX *= sceneProps.friction;
    }

    // left wall
    if (this.x - props.radius <= 0) {
      this.velX *= -props.bounce;
      this.x = props.radius;
    }

    // right wall
    if (this.x + props.radius >= sceneProps.width) {
      this.velX *= -props.bounce;
      this.x = sceneProps.width - props.radius;
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
