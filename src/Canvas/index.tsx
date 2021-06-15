import { useEffect, useRef } from 'react';
import { useFunctions } from './hooks';
import Scene from './Scene';
import { ReactComponent as ResetIcon } from './resetIcon.svg';
import { Scenes } from './types';
import * as CanvasStyles from './styles';

interface CanvasProps {
  scene: Scenes;
  updateCounter(isButtonEvent: boolean, ball: number): void;
  isResetState: boolean;
  resetCounter(): void;
}

const Canvas = ({
  scene,
  updateCounter,
  isResetState,
  resetCounter,
}: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentIndexRef = useRef(1);
  const animationRef = useRef<Scene | null>(null);
  const functions = useFunctions(updateBall, 1000);

  function setupScene() {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    animationRef.current = new Scene(canvas);
  }

  useEffect(() => {
    setupScene();
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

  function handleResetClick() {
    setupScene();
    resetCounter();
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
      {isResetState && (
        <CanvasStyles.ResetContainer className="center">
          <CanvasStyles.ResetButton
            type="button"
            className="center"
            onClick={handleResetClick}
            aria-label="Reset the machine"
          >
            <ResetIcon />
            Reset the machine
          </CanvasStyles.ResetButton>
        </CanvasStyles.ResetContainer>
      )}

      <CanvasStyles.Image src="vendingMachine.png" alt="Vending Machine" />
      <CanvasStyles.CanvasElement ref={canvasRef} />
    </CanvasStyles.Wrapper>
  );
};

export default Canvas;
