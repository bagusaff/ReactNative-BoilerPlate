/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { scaleFont } from 'styles';
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
    transparent: 'rgba(0,0,0,0)',
    overlay: 'rgba(37,37,37,0.25)'
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
    xs: scaleFont(10),
    tiny: scaleFont(12),
    small: scaleFont(14),
    regular: scaleFont(16),
    medium: scaleFont(18),
    large: scaleFont(20),
    xl: scaleFont(24),
    xxl: scaleFont(32),
    xxxl: scaleFont(36),
};

export default {
    Colors,
    NavigationColors,
    FontSize,
};