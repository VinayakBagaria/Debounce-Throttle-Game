const BALL_COLORS = ['purple', 'red', 'blue', 'lime'];

export function getRandomBallColor() {
  return BALL_COLORS[Math.floor(Math.random() * BALL_COLORS.length)];
}
