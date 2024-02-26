/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native';
import { ThemeVariables } from 'types/theme';

export default function ({ FontSize, Colors }: ThemeVariables) {
    return StyleSheet.create({
        sizeTiny: {
            fontSize: FontSize.tiny,
            color: Colors.textPrimary,
        },
        sizeSmall: {
            fontSize: FontSize.small,
            color: Colors.textPrimary,
        },
        sizeRegular: {
            fontSize: FontSize.regular,
            color: Colors.textPrimary,
        },
        sizeLarge: {
            fontSize: FontSize.large,
            color: Colors.textPrimary,
        },
        sizeBold: {
            fontWeight: 'bold',
        },
        textUppercase: {
            textTransform: 'uppercase',
        },
        titleSmall: {
            fontSize: FontSize.small * 1.5,
            fontWeight: 'bold',
            color: Colors.textPrimary,
        },
        titleRegular: {
            fontSize: FontSize.regular * 2,
            fontWeight: 'bold',
            color: Colors.textPrimary,
        },
        titleLarge: {
            fontSize: FontSize.large * 2,
            fontWeight: 'bold',
            color: Colors.textPrimary,
        },
        textCenter: {
            textAlign: 'center',
        },
        textJustify: {
            textAlign: 'justify',
        },
        textLeft: {
            textAlign: 'left',
        },
        textRight: {
            textAlign: 'right',
        },
        textError: {
            color: Colors.danger,
        },
        textSuccess: {
            color: Colors.success,
        },
        textPrimary: {
            color: Colors.primary,
        },
        textSecondary: {
            color: Colors.secondary,
        },
        textBlue: {
            color: Colors.blue,
        },
        fontBlack: {
            fontFamily: 'Roboto-Black',
        },
        fontBlackItalic: {
            fontFamily: 'Roboto-BlackItalic',
        },
        fontBold: {
            fontFamily: 'Roboto-Bold',
        },
        fontBoldItalic: {
            fontFamily: 'Roboto-BoldItalic',
        },
        fontItalic: {
            fontFamily: 'Roboto-Italic',
        },
        fontLight: {
            fontFamily: 'Roboto-Light',
        },
        fontLightItalic: {
            fontFamily: 'Roboto-LightItalic',
        },
        fontMedium: {
            fontFamily: 'Roboto-Medium',
        },
        fontMediumItalic: {
            fontFamily: 'Roboto-MediumItalic',
        },
        fontRegular: {
            fontFamily: 'Roboto-Regular',
        },
        fontThin: {
            fontFamily: 'Roboto-Thin',
        },
        fontThinItalic: {
            fontFamily: 'Roboto-ThinItalic',
        },
    });
}
