import { useState } from 'react';
import Canvas from '../Canvas';
import Counter from './Counter';
import Slider from '../Slider';
import { Scenes } from '../Canvas/types';
import * as SceneStyles from './styles';

interface ScenarioProps {
  scene: Scenes;
  sliderLabel: string | null;
}

const INITIAL_STATE = { button: 0, ball: 0 };

const MAX_BALLS = 30;

const Scenario = ({ scene, sliderLabel }: ScenarioProps) => {
  const [values, setValues] = useState(INITIAL_STATE);
  const [timer, setTimer] = useState(500);

  function handleUpdateCounter(isButtonEvent: boolean, ball: number) {
    setValues((prevState) => ({
      button: prevState.button + (isButtonEvent ? 1 : 0),
      ball,
    }));
  }

  function handleResetCounter() {
    setValues(INITIAL_STATE);
  }

  return (
    <SceneStyles.Wrapper>
      <Canvas
        timer={timer}
        scene={scene}
        updateCounter={handleUpdateCounter}
        isResetState={values.ball === MAX_BALLS}
        resetCounter={handleResetCounter}
      />
      <SceneStyles.RightSide>
        <Counter buttonCounter={values.button} eventCounter={values.ball} />
        {sliderLabel && (
          <Slider
            legendName={sliderLabel}
            timer={timer}
            onChange={(newTimer) => setTimer(newTimer)}
          />
        )}
      </SceneStyles.RightSide>
    </SceneStyles.Wrapper>
  );
};

export default Scenario;
