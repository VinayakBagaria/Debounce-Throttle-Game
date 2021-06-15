const BALL_SIZE = 20;
const GRAVITY_X = 0;
const GRAVITY_Y = 0.5;
const BOUNCINESS = 0.8;
const FRICTION = 1.01;

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
    this.x = Math.max(BALL_SIZE + Math.random() * width, width - BALL_SIZE);
    this.y = 0;
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
      this.x = BALL_SIZE * 0.5;
      this.fx = this.fx * -1 * BOUNCINESS;
      this.fy /= FRICTION;
    } else if (this.x > this.width - BALL_SIZE * 0.5) {
      this.x = this.width - BALL_SIZE * 0.5;
      this.fx = this.fx * -1 * BOUNCINESS;
      this.fy /= FRICTION;
    }

    if (this.y < BALL_SIZE * 0.5) {
      this.y = BALL_SIZE * 0.5;
      this.fy = this.fy * -1 * BOUNCINESS;
      this.fx /= FRICTION;
    } else if (this.y > this.height - BALL_SIZE * 0.5) {
      this.y = this.height - BALL_SIZE * 0.5;
      this.fy = this.fy * -1 * BOUNCINESS;
      this.fx /= FRICTION;
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

    const pixelsIndex = inheight * this.width + inwidth;
    if (!pixels[pixelsIndex]) {
      pixels[pixelsIndex] = [this];
    } else {
      pixels[pixelsIndex].push(this);
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
