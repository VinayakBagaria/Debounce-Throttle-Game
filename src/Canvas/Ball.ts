const BALL_SIZE = 60;
const GRAVITY_X = 0;
const GRAVITY_Y = 0.5;
const BOUNCINESS = 0.8;
const FRICTION = 1.01;
const WALL_STICK = false;
const WALL_BOUNCE = true;
const STICKINESS = 50;

class Ball {
  private width: number;
  private height: number;
  private x: number;
  private y: number;
  private fx: number;
  private fy: number;
  private dx: number;
  private dy: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.fx = 0;
    this.fy = 0;
    this.dx = 0;
    this.dy = 0;
  }

  public tick(pixels: Array<Array<Ball>>) {
    this.fy += GRAVITY_Y;
    this.fx += GRAVITY_X;
    this.x += this.fx;
    this.y += this.fy;

    if (this.x < BALL_SIZE * 0.5) {
      if (WALL_STICK) {
        this.x = BALL_SIZE * 0.5;
        this.fy /= FRICTION * STICKINESS;
      } else if (WALL_BOUNCE) {
        this.x = BALL_SIZE * 0.5;
        this.fx = this.fx * -1 * BOUNCINESS;
        this.fy /= FRICTION;
      } else {
        this.dx += BALL_SIZE * 0.5 - this.x;
      }
    } else if (this.x > this.width - BALL_SIZE * 0.5) {
      if (WALL_STICK) {
        this.x = this.width - BALL_SIZE * 0.5;
        this.fy /= FRICTION * STICKINESS;
      } else if (WALL_BOUNCE) {
        this.x = this.width - BALL_SIZE * 0.5;
        this.fx = this.fx * -1 * BOUNCINESS;
        this.fy /= FRICTION;
      } else {
        this.dx -= this.x - this.width + BALL_SIZE * 0.5;
      }
    }

    if (this.y < BALL_SIZE * 0.5) {
      if (WALL_STICK) {
        this.y = BALL_SIZE * 0.5;
        this.fx /= FRICTION * STICKINESS;
      } else if (WALL_BOUNCE) {
        this.y = BALL_SIZE * 0.5;
        this.fy = this.fy * -1 * BOUNCINESS;
        this.fx /= FRICTION;
      } else {
        this.dy += BALL_SIZE * 0.5 - this.y;
      }
    } else if (this.y > this.height - BALL_SIZE * 0.5) {
      if (WALL_STICK) {
        this.y = this.height - BALL_SIZE * 0.5;
        this.fx /= FRICTION * STICKINESS;
      } else if (WALL_BOUNCE) {
        this.y = this.height - BALL_SIZE * 0.5;
        this.fy = this.fy * -1 * BOUNCINESS;
        this.fx /= FRICTION;
      } else {
        this.dy -= this.y - this.height + BALL_SIZE * 0.5;
      }
    }

    const inwidth = Math.round(this.x / BALL_SIZE);
    const inheight = Math.round(this.y / BALL_SIZE);

    for (let a = inwidth - 1; a <= inwidth + 1; a++) {
      for (let b = inheight - 1; b <= inheight + 1; b++) {
        let g = pixels[b * this.width + a] || [];
        for (let j = 0, l = g.length; j < l; j++) {
          const that = g[j];
          let dx = that.x - this.x;
          let dy = that.y - this.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < BALL_SIZE && d > 0) {
            dx = (dx / d) * (BALL_SIZE - d) * 0.25;
            dy = (dy / d) * (BALL_SIZE - d) * 0.25;
            this.dx -= dx;
            this.dy -= dy;
            that.dx += dx;
            that.dy += dy;
          }
        }
      }
    }

    if (!pixels[inheight * this.width + inwidth]) {
      pixels[inheight * this.width + inwidth] = [this];
    } else {
      pixels[inheight * this.width + inwidth].push(this);
    }

    this.x += this.dx;
    this.y += this.dy;
    this.fx += this.dx;
    this.fy += this.dy;
    this.dx = 0;
    this.dy = 0;

    return {
      x: this.x,
      y: this.y,
      pixels,
    };
  }
}

export default Ball;
