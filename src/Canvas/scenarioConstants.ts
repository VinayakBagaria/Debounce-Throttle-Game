export enum Scenes {
  Normal,
  Debounce,
  Throttle,
  Raf,
}

export const SCENARIOS = [
  {
    name: "Let's throw a ball normally!",
    scene: Scenes.Normal,
    sliderLabel: null,
  },
  {
    name: 'Throttle',
    scene: Scenes.Throttle,
    sliderLabel: 'Throttle options',
  },
  {
    name: 'Debounce',
    scene: Scenes.Debounce,
    sliderLabel: 'Debounce options',
  },
  {
    name: 'Request Animation Frame',
    scene: Scenes.Raf,
    sliderLabel: null,
  },
];
