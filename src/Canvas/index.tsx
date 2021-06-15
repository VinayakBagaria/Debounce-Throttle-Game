import { useEffect, useRef, useState } from 'react';
import Scene from './Scene';
import * as CanvasStyles from './styles';

const WIDTH = 145;
const HEIGHT = 185;

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const animationRef = useRef<Scene | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    animationRef.current = new Scene(canvas);
  }, []);

  function handleButtonClick() {
    setCurrentIndex(currentIndex + 1);
    animationRef.current?.createSingleBall();
    console.log(animationRef.current?.ballCount);
  }

  return (
    <CanvasStyles.Wrapper>
      <CanvasStyles.ButtonWrapper>
        <CanvasStyles.Button
          type="button"
          onClick={handleButtonClick}
          className="machine-button"
          aria-label="Throw a ball"
        />
      </CanvasStyles.ButtonWrapper>
      <CanvasStyles.Image src="vendingMachine.png" alt="Vending Machine" />
      <CanvasStyles.CanvasElement
        ref={canvasRef}
        width={WIDTH}
        height={HEIGHT}
      />
    </CanvasStyles.Wrapper>
  );
};

export default Canvas;
