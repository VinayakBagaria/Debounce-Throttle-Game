import Scenario from './Scenario';
import { Scenes } from './Canvas/types';
import * as AppStyles from './styles';

const SCENARIOS = [
  {
    name: "Let's throw a ball normally!",
    scene: Scenes.Normal,
  },
  {
    name: 'Throttle',
    scene: Scenes.Throttle,
  },
  {
    name: 'Debounce',
    scene: Scenes.Debounce,
  },
];

function App() {
  return (
    <AppStyles.Wrapper>
      {SCENARIOS.map((eachScenario) => (
        <AppStyles.EachSection key={eachScenario.scene}>
          <AppStyles.Heading>{eachScenario.name}</AppStyles.Heading>
          <Scenario scene={eachScenario.scene} />
        </AppStyles.EachSection>
      ))}
    </AppStyles.Wrapper>
  );
}

export default App;
