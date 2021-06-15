import { useState } from 'react';
import Canvas from '../Canvas';
import Counter from './Counter';
import { Scenes } from '../Canvas/types';
import * as SceneStyles from './styles';

interface ScenarioProps {
  scene: Scenes;
}

const INITIAL_STATE = { button: 0, ball: 0 };

const MAX_BALLS = 30;

const Scenario = ({ scene }: ScenarioProps) => {
  const [values, setValues] = useState(INITIAL_STATE);

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
        scene={scene}
        updateCounter={handleUpdateCounter}
        isResetState={values.ball === MAX_BALLS}
        resetCounter={handleResetCounter}
      />
      <Counter buttonCounter={values.button} eventCounter={values.ball} />
    </SceneStyles.Wrapper>
  );
};

export default Scenario;
