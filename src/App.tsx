import Scenario from './Scenario';
import { Scenes } from './Canvas/types';
import * as AppStyles from './styles';

const SCENARIOS = [
  {
    name: "Let's throw a ball normally!",
    scene: Scenes.Normal,
    sliderLabel: null,
  },
  {
    name: 'Throttle',
    scene: Scenes.Throttle,
    sliderLabel: 'Throttle options',
  },
  {
    name: 'Debounce',
    scene: Scenes.Debounce,
    sliderLabel: 'Debounce options',
  },
];

function App() {
  return (
    <AppStyles.Wrapper>
      {SCENARIOS.map((eachScenario) => (
        <AppStyles.EachSection key={eachScenario.scene}>
          <AppStyles.Heading>{eachScenario.name}</AppStyles.Heading>
          <Scenario
            scene={eachScenario.scene}
            sliderLabel={eachScenario.sliderLabel}
          />
        </AppStyles.EachSection>
      ))}
    </AppStyles.Wrapper>
  );
}

export default App;
