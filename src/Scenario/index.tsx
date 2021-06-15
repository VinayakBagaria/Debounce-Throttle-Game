import { useState } from 'react';
import Canvas from '../Canvas';
import Counter from './Counter';
import { Scenes } from '../Canvas/types';
import * as SceneStyles from './styles';

interface ScenarioProps {
  scene: Scenes;
}

const Scenario = ({ scene }: ScenarioProps) => {
  const [values, setValues] = useState({ button: 0, ball: 0 });

  function handleUpdateCounter(isButtonEvent: boolean, ball: number) {
    setValues((prevState) => ({
      button: prevState.button + (isButtonEvent ? 1 : 0),
      ball,
    }));
  }

  return (
    <SceneStyles.Wrapper>
      <Canvas scene={scene} updateCounter={handleUpdateCounter} />
      <Counter buttonCounter={values.button} eventCounter={values.ball} />
    </SceneStyles.Wrapper>
  );
};

export default Scenario;
