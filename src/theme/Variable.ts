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
    transparent: 'rgba(0,0,0,0)'
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