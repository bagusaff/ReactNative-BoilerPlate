import React, { FC, ReactNode, useState } from 'react';
import { TextInput as DefaultTextInput, View, Text, TextInputProps, TextStyle, ViewStyle, Platform, TouchableOpacity } from 'react-native';
import useTheme from 'utils/hooks/useTheme';
import Gap from './Gap';

interface CustomTextInputProps extends TextInputProps {
    label?: string;
    type?: 'text' | 'password' | 'search';
    error?: boolean;
    errorText?: string;
    disabled?: boolean;
}

const TextInput: FC<CustomTextInputProps> = ({
    label,
    type = 'text',
    error,
    errorText,
    disabled = false,
    style,
    ...props
}) => {

    const { Colors, Fonts, Images } = useTheme();

    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const containerStyle: ViewStyle = {
        paddingHorizontal: 16,
        paddingVertical: Platform.OS == 'ios' ? 14 : 8,
        borderRadius: 10,
        backgroundColor: Colors.background,
        flexDirection: 'row',
        alignItems: 'center',
    };

    const inputStyle: TextStyle = {
        padding: 0,
        margin: 0,
        flex: 1,
        alignSelf: 'stretch',
        fontFamily: Fonts.fontRegular.fontFamily,
        color: Colors.textPrimary
    };

    // const searchType = () => {
    //     return (
    //         <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
    //             <IcSearch width={20} height={20} fill={Colors.textGray400} />
    //             <Gap width={8} />
    //             <TextInput
    //                 autoCapitalize='none'
    //                 editable={!disabled}
    //                 style={[inputStyle, style]}
    //                 placeholderTextColor={Colors.textGray400}
    //                 {...restProps}
    //             />
    //         </View>
    //     )
    // }
    const textTypeInput = () => {
        return (
            <>
                <DefaultTextInput
                    autoCapitalize='none'
                    editable={!disabled}
                    style={[inputStyle, style]}
                    placeholderTextColor={Colors.secondary}
                    {...props}
                />
            </>
        )
    }
    const passwordType = () => {
        return (
            <>
                <DefaultTextInput
                    autoCapitalize='none'
                    editable={!disabled}
                    secureTextEntry={secureTextEntry}
                    style={[inputStyle, style]}
                    placeholderTextColor={Colors.secondary}
                    {...props}
                />
                <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                    {secureTextEntry ? (
                        <Text style={[Fonts.fontRegular, Fonts.sizeTiny, Fonts.textBlue]}>Show</Text>
                    ) : (
                        <Text style={[Fonts.fontRegular, Fonts.sizeTiny, Fonts.textBlue]}>Hide</Text>
                    )}
                </TouchableOpacity>
            </>
        )
    }

    const renderField = () => {
        switch (type) {
            case 'text':
                return textTypeInput();
            case 'password':
                return passwordType();
            // case 'phone':
            //     return phoneType();
            // case 'search':
            //     return searchType();
            default:
                return textTypeInput();

        }
    }


    return (
        <View style={{ width: '100%' }}>
            {label && <Text style={[Fonts.fontRegular, Fonts.sizeTiny, Fonts.textSecondary, { marginBottom: 2 }]}>{label}</Text>}
            <View style={[containerStyle, error && { borderWidth: 1, borderColor: Colors.danger }]}>
                {renderField()}
            </View>
            {error && <Text style={[Fonts.fontRegular, Fonts.sizeTiny, Fonts.textSecondary, { marginBottom: 2 }]}>Your password is too short</Text>}

        </View>
    )
}

export default TextInput