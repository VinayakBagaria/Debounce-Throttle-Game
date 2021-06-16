import { ThemeVariant } from '../hooks';
import { ReactComponent as DayIcon } from './day.svg';
import { ReactComponent as NightIcon } from './night.svg';
import * as HeaderStyles from './styles';

interface HeaderProps {
  theme: ThemeVariant;
  inverseTheme(): void;
}

const Header = ({ theme, inverseTheme }: HeaderProps) => (
  <HeaderStyles.Wrapper>
    <HeaderStyles.Button aria-label="Switch theme" onClick={inverseTheme}>
      {theme === ThemeVariant.Dark && <DayIcon />}
      {theme === ThemeVariant.Light && <NightIcon />}
    </HeaderStyles.Button>
  </HeaderStyles.Wrapper>
);

export default Header;
