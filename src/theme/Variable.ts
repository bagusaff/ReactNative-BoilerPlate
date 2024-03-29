/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { ThemeNavigationColors } from 'types/theme';

/**
 * Colors
 */
export const Colors = {
    transparent: 'rgba(0,0,0,0)',
    inputBackground: '#FFFFFF',
    white: '#ffffff',
    //Typography
    textGray800: '#000000',
    textGray400: '#4D4D4D',
    textGray200: '#A1A1A1',
    primary: '#E14032',
    success: '#28a745',
    error: '#dc3545',
    //ComponentColors
    circleButtonBackground: '#E1E1EF',
    circleButtonColor: '#44427D',
};

export const NavigationColors: Partial<ThemeNavigationColors> = {
    primary: Colors.primary,
    background: '#EFEFEF',
    card: '#EFEFEF',
};

/**
 * FontSize
 */
export const FontSize = {
    tiny: 14,
    small: 16,
    regular: 20,
    large: 40,
};

export default {
    Colors,
    NavigationColors,
    FontSize,
};