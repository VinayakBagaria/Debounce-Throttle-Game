const WIDTH = 160;
const HEIGHT = 185;
const GRAVITY = 0.25;
const FRICTION = 0.98;

export const defaultSceneConfig = {
  width: WIDTH,
  height: HEIGHT,
  gravity: GRAVITY,
  ballCount: 40,
  friction: FRICTION,
};

export type SceneConfigType = typeof defaultSceneConfig;

export const BALL_COLORS = ['purple', 'red', 'blue', 'lime'];

export const defaultBallConfig = {
  bounce: 0.9,
  radius: 20,
  color: BALL_COLORS[0],
  startVelX: 0,
  startVelY: 0,
};

export type BallConfigType = typeof defaultBallConfig;

export const defaultVelocityProps = {
  startVelX: 2,
  startVelY: 6,
};
