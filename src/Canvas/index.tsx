import { useEffect, useRef } from 'react';
import Scene from './Scene';
import * as CanvasStyles from './styles';
import { debounce } from './utils';

interface CanvasProps {
  updateCounter(isButtonEvent: boolean, ball: number): void;
}

const Canvas = ({ updateCounter }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentIndexRef = useRef(1);
  const animationRef = useRef<Scene | null>(null);

  const debounceRef = useRef(debounce(updateBall, 4000));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    animationRef.current = new Scene(canvas);
  }, []);

  useEffect(() => {
    return () => {
      debounceRef.current.clear();
    };
  });

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
    debounceRef.current.implementation();
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
