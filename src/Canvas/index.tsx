import { useEffect, useRef } from 'react';
import { useFunctions } from './hooks';
import Scene from './Scene';
import * as CanvasStyles from './styles';
import { Scenes } from './types';

interface CanvasProps {
  scene: Scenes;
  updateCounter(isButtonEvent: boolean, ball: number): void;
}

const Canvas = ({ scene, updateCounter }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentIndexRef = useRef(1);
  const animationRef = useRef<Scene | null>(null);
  const functions = useFunctions(updateBall, 1000);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    animationRef.current = new Scene(canvas);
  }, []);

  function notifyValuesToParent(isButtonEvent: boolean) {
    const ballCount = animationRef.current?.getBallCount() ?? 0;
    updateCounter(isButtonEvent, ballCount);
  }

  function updateBall() {
    currentIndexRef.current += 1;
    animationRef.current?.createSingleBall();
    notifyValuesToParent(false);
  }

  function handleButtonClick() {
    if (scene === Scenes.Debounce) {
      functions.debounceFunction();
    } else if (scene === Scenes.Throttle) {
      functions.throttleFunction();
    } else {
      functions.normalFunction();
    }
    notifyValuesToParent(true);
  }

  return (
    <CanvasStyles.Wrapper>
      <CanvasStyles.ButtonWrapper>
        <CanvasStyles.Button
          type="button"
          onClick={handleButtonClick}
          aria-label="Throw a ball"
        />
      </CanvasStyles.ButtonWrapper>
      <CanvasStyles.Image src="vendingMachine.png" alt="Vending Machine" />
      <CanvasStyles.CanvasElement ref={canvasRef} />
    </CanvasStyles.Wrapper>
  );
};

export default Canvas;
