import Header from './Header';
import Scenario from './Scenario';
import { SCENARIOS } from './Canvas/scenarioConstants';
import * as AppStyles from './styles';
import { useTheme } from './hooks';

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
