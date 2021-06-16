import Header from './Header';
import Scenario from './Scenario';
import { Scenes } from './Canvas/types';
import * as AppStyles from './styles';
import { useTheme } from './hooks';

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

const App = () => {
  const { theme, inverseTheme, wrapperRef } = useTheme();

  return (
    <div data-theme={theme} ref={wrapperRef}>
      <Header theme={theme} inverseTheme={inverseTheme} />
      <AppStyles.Wrapper>
        {SCENARIOS.map(eachScenario => (
          <AppStyles.EachSection key={eachScenario.scene}>
            <AppStyles.Heading>{eachScenario.name}</AppStyles.Heading>
            <Scenario
              scene={eachScenario.scene}
              sliderLabel={eachScenario.sliderLabel}
            />
          </AppStyles.EachSection>
        ))}
      </AppStyles.Wrapper>
    </div>
  );
};

export default App;
