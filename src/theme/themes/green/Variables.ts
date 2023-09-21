import { ThemeNavigationColors } from 'types/theme';

export const Colors = {
  primary: '#81B401',
  textGray800: '#F5F8ED',
  textGray400: '#F5F8ED',
  textGray200: '#F5F8ED',
  inputBackground: '#3a3a3a',
  circleButtonBackground: '#7F4E01',
};

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
  background: Colors.primary,
  card: '#81b401',
};

export default {
  Colors,
  NavigationColors,
};
