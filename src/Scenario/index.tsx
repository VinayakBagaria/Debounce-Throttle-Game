import { useState } from 'react';
import Canvas from '../Canvas';
import Counter from './Counter';
import * as SceneStyles from './styles';

const Scenario = () => {
  const [values, setValues] = useState({ button: 0, ball: 0 });

  function handleUpdateCounter(isButtonEvent: boolean, ball: number) {
    setValues((prevState) => ({
      button: prevState.button + (isButtonEvent ? 1 : 0),
      ball,
    }));
  }

  return (
    <SceneStyles.Wrapper>
      <Canvas updateCounter={handleUpdateCounter} />
      <Counter buttonCounter={values.button} eventCounter={values.ball} />
    </SceneStyles.Wrapper>
  );
};

export default Scenario;
