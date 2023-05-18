import 'styled-components';
import constants from './constants';

declare module 'styled-components' {
  type ThemeType = typeof constants;

  export interface DefaultTheme extends ThemeType {}
}
