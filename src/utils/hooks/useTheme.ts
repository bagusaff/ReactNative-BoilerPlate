import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

import { Fonts, DefaultVariables, themes, Images } from 'theme'
import { ThemeState } from 'store/slices/theme';
import { Theme, ThemeNavigationColors, ThemeNavigationTheme, ThemeVariables } from 'types/theme';

export default function () {
    // Get the scheme device
    const colorScheme = useColorScheme();
    // Get current theme from the store
    const currentTheme = useSelector(
        (state: { theme: ThemeState }) => state.theme.theme,
    );
    const isDark = useSelector(
        (state: { theme: ThemeState }) => state.theme.darkMode,
    );
    const darkMode = isDark === null ? colorScheme === 'dark' : isDark;

    let variables = {};
    let partialTheme = {};
    let darkVariables = {};
    let partialDarkTheme = {};

    if (currentTheme !== 'default') {
        const {
            Variables,
            // @ts-ignore to prevent multiple themes handling
            ...themeConfig
        } = themes[currentTheme] || {};

        variables = Variables;
        partialTheme = themeConfig || {};
    }

    if (darkMode) {
        const darkThemeKey = `${currentTheme}_dark` as keyof typeof themes;
        if (darkThemeKey in themes) {
            const { Variables, ...darkThemeConfig } = themes[darkThemeKey] || {};

            darkVariables = Variables;
            partialDarkTheme = darkThemeConfig;
        }
    }
    const themeVariables = mergeVariables(variables, darkVariables);
    const fonts = Fonts(themeVariables);
    const images = Images(themeVariables);


    // Build the default theme
    const baseTheme: Theme<
        typeof fonts,
        typeof images
    > = {
        Fonts: fonts,
        Images: images,
        ...themeVariables,
    };

    // Merge and return the current Theme
    return buildTheme(
        darkMode,
        baseTheme,
        formatTheme(themeVariables, partialTheme || {}),
        formatTheme(themeVariables, partialDarkTheme || {}),
    );
}


/**
 * Generate Theme with theme variables
 */
const formatTheme = <F, I>(
    variables: ThemeVariables,
    theme: Partial<Theme<F, I>>,
) => {
    return Object.entries(theme).reduce((acc, [name, generate]) => {
        return {
            ...acc,
            [name]: (generate as any)(variables),
        };
    }, theme);
};

/**
 * Merge all variables for building the theme
 * baseTheme <- currentTheme <- currentDarkTheme
 */
const mergeVariables = (
    themeConfig: Partial<ThemeVariables>,
    darkThemeConfig: Partial<ThemeVariables>,
) => {
    return Object.entries(DefaultVariables).reduce((acc, [group, vars]) => {
        const theme:
            | Record<keyof typeof DefaultVariables, typeof vars>
            | undefined = (themeConfig as any)[group];
        const darkTheme:
            | Record<keyof typeof DefaultVariables, typeof vars>
            | undefined = (darkThemeConfig as any)[group];

        return {
            ...acc,
            [group]: {
                ...vars,
                ...(theme || {}),
                ...(darkTheme || {}),
            },
        };
    }, DefaultVariables);
};

/**
 * Provide all the theme exposed with useTheme()
 */
const buildTheme = <F, I>(
    darkMode: boolean,
    baseTheme: Theme<F, I>,
    themeConfig: Partial<Theme<F, I>>,
    darkThemeConfig: Partial<Theme<F, I>>,
) => {
    return {
        ...mergeTheme(baseTheme, themeConfig, darkThemeConfig),
        darkMode,
        NavigationTheme: mergeNavigationTheme(
            darkMode ? DarkTheme : DefaultTheme,
            baseTheme.NavigationColors,
        ),
    };
};

/**
 * Merge theme from baseTheme <- currentTheme <- currentDarkTheme
 */
const mergeTheme = <F, I>(
    baseTheme: Theme<F, I>,
    theme: Partial<Theme<F, I>>,
    darkTheme: Partial<Theme<F, I>>,
) =>
    Object.entries(baseTheme).reduce(
        (acc, [key, value]) => ({
            ...acc,
            [key]: {
                ...((value as any) || {}),
                ...((theme as any)[key] || {}),
                ...((darkTheme as any)[key] || {}),
            },
        }),
        baseTheme,
    ) as typeof baseTheme;

/**
 * Merge the React Navigation Theme
 *
 * @param reactNavigationTheme
 * @param overrideColors
 * @return {{colors}}
 */
const mergeNavigationTheme = (
    reactNavigationTheme: ThemeNavigationTheme,
    overrideColors: Partial<ThemeNavigationColors>,
) => ({
    ...reactNavigationTheme,
    colors: {
        ...reactNavigationTheme.colors,
        ...overrideColors,
    },
});