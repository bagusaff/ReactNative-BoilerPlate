import { Theme as ReactNavigationTheme } from '@react-navigation/native/src/types';
import Variables from 'theme/Variable';


export type ThemeVariables = {
    Colors: typeof Variables.Colors;
    NavigationColors: typeof Variables.NavigationColors;
    FontSize: typeof Variables.FontSize;
};

export type Theme<F, I> = ThemeVariables & {
    Fonts: F;
    Images: I;
    Variables?: Partial<ThemeVariables>;
};


type NavigationColors<T> = T extends { colors: infer U } ? U : never;
type ThemeNavigationColors = NavigationColors<ReactNavigationTheme>;

export type ThemeNavigationTheme = {
    dark: boolean;
    colors: ThemeNavigationColors;
};

const fonts = Fonts(DefaultVariables);
const images = Images(DefaultVariables);
