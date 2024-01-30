import { ThemeNavigationColors } from 'types/theme';

export const Colors = {
  primary: '#fff',
  secondary: '#828C96',
  background: '#F5F7F9',
  border: '#EDF1F7',
  blue: '#2F80ED',
  white: '#fff',
  textPrimary: '#252525',
  icon: '#445677',
  info: '#1573FE',
  infoBackground: 'rgba(21,115,254,0.15)',
  white50p: 'rgba(255,255,255,0.5)',
  warning: '#FDB64D',
  success: '#4BC38C',
  danger: "#D70000",
  transparent: 'rgba(0,0,0,0)',
  overlay: 'rgba(37,37,37,0.25)'

};

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
  background: Colors.primary,
  card: '#2F80ED',
};

export default {
  Colors,
  NavigationColors,
};
