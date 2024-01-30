import { ThemeNavigationColors } from 'types/theme';

export const Colors = {
  primary: '#1F2937',
  secondary: '#828C96',
  background: '#19232D',
  border: '#1C1F2B',
  blue: '#2F80ED',
  white: '#fff',
  textPrimary: '#F2F3F4',
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
  background: '#1B1A23',
  card: '#1B1A23',
};

export default {
  Colors,
  NavigationColors,
};
