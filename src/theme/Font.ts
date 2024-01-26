/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native';
import { ThemeVariables } from 'types/theme';

export default function ({ FontSize, Colors }: ThemeVariables) {
    return StyleSheet.create({
        textTiny: {
            fontSize: FontSize.tiny,
            color: Colors.textPrimary,
        },
        textSmall: {
            fontSize: FontSize.small,
            color: Colors.textPrimary,
        },
        textRegular: {
            fontSize: FontSize.regular,
            color: Colors.textPrimary,
        },
        textLarge: {
            fontSize: FontSize.large,
            color: Colors.textPrimary,
        },
        textBold: {
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
        textLobster: {
            fontFamily: 'lobster',
            fontWeight: 'normal',
        },
    });
}
