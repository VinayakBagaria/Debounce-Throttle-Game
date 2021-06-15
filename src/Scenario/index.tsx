import Canvas from '../Canvas';
import Counter from './Counter';
import * as SceneStyles from './styles';

const Scenario = () => (
  <SceneStyles.Wrapper>
    <Canvas />
    <Counter buttonCounter={24} eventCounter={3} />
  </SceneStyles.Wrapper>
);

export default Scenario;
