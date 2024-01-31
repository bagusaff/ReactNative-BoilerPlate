import React from 'react';
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
// import { IcToastError, IcToastInfo, IcToastSuccess, IcToastWarning } from 'assets/icons';
import Gap from 'components/Gap';
import { scaleFont } from 'styles';

export interface CustomToastProps {
    text1?: string;
    text2?: string;
    actionButton?: () => any;
    actionText?: string;
}

const SuccessToastContainer: ViewStyle = {
    flexDirection: 'row',
    borderRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 2,
    backgroundColor: '#F6FFF9',
    padding: 12,
    borderColor: '#48C1B5',
    borderWidth: 1,
    width: '90%',
}
const InfoToastContainer: ViewStyle = {
    flexDirection: 'row',
    borderRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 2,
    backgroundColor: '#F5F9FF',
    padding: 12,
    borderColor: '#9DC0EE',
    borderWidth: 1,
    width: '90%',
}
const WarningToastContainer: ViewStyle = {
    flexDirection: 'row',
    borderRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 2,
    backgroundColor: '#FFF8EC',
    padding: 12,
    borderColor: '#F7D9A4',
    borderWidth: 1,
    width: '90%',
}
const ErrorToastContainer: ViewStyle = {
    flexDirection: 'row',
    borderRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 2,
    backgroundColor: '#FFF5F3',
    padding: 12,
    borderColor: '#F4B0A1',
    borderWidth: 1,
    width: '90%',
}

const TextHeader: TextStyle = {
    color: '#27303A',
    fontFamily: 'Poppins-Medium',
    fontSize: scaleFont(14),
}

const TextBody: TextStyle = {
    color: '#27303A',
    fontFamily: 'Poppins-Regular',
    fontSize: scaleFont(11),
    flex: 1
}

const ActionButton: ViewStyle = {
    borderRadius: 6,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#979FA9',
    justifyContent: 'center',
    alignSelf: 'center'
}

const ActionText: TextStyle = {
    fontFamily: 'Poppins-Regular',
    color: '#2F3F53',
    fontSize: scaleFont(11)
}
// Define the toast components
export const toastComponents = {
    success: ({ text1, text2, actionButton, actionText }: CustomToastProps) => (
        <View style={SuccessToastContainer}>
            {/* <IcToastSuccess width={24} height={24} /> */}
            <Gap width={12} />
            <View style={{ flex: 1 }}>
                {text1 && text1.trim().length > 0 && (
                    <Text style={TextHeader}>{text1}</Text>
                )}
                {text2 && text2.trim().length > 0 && (
                    <Text style={TextBody}>{text2}</Text>
                )}
            </View>
            {actionButton && actionText ? (
                <TouchableOpacity activeOpacity={0.7} onPress={actionButton} style={ActionButton}>
                    <Text style={ActionText}>{actionText}</Text>
                </TouchableOpacity>
            ) : null}
        </View>
    ),
    info: ({ text1, text2, actionButton, actionText }: CustomToastProps) => (
        <View style={InfoToastContainer}>
            {/* <IcToastInfo width={24} height={24} /> */}
            <Gap width={12} />
            <View style={{ flex: 1 }}>
                {text1 && text1.trim().length > 0 && (
                    <Text style={TextHeader}>{text1}</Text>
                )}
                {text2 && text2.trim().length > 0 && (
                    <Text style={TextBody}>{text2}</Text>
                )}
            </View>
            {actionButton && actionText ? (
                <TouchableOpacity activeOpacity={0.7} onPress={actionButton} style={ActionButton}>
                    <Text style={ActionText}>{actionText}</Text>
                </TouchableOpacity>
            ) : null}
        </View>
    ),
    warning: ({ text1, text2, actionButton, actionText }: CustomToastProps) => (
        <View style={WarningToastContainer}>
            {/* <IcToastWarning width={24} height={24} /> */}
            <Gap width={12} />
            <View style={{ flex: 1 }}>
                {text1 && text1.trim().length > 0 && (
                    <Text style={TextHeader}>{text1}</Text>
                )}
                {text2 && text2.trim().length > 0 && (
                    <Text style={TextBody}>{text2}</Text>
                )}
            </View>
            {actionButton && actionText ? (
                <TouchableOpacity activeOpacity={0.7} onPress={actionButton} style={ActionButton}>
                    <Text style={ActionText}>{actionText}</Text>
                </TouchableOpacity>
            ) : null}
        </View>
    ),
    error: ({ text1, text2, actionButton, actionText }: CustomToastProps) => (
        <View style={ErrorToastContainer}>
            {/* <IcToastError width={24} height={24} /> */}
            <Gap width={12} />
            <View style={{ flex: 1 }}>
                {text1 && text1.trim().length > 0 && (
                    <Text style={TextHeader}>{text1}</Text>
                )}
                {text2 && text2.trim().length > 0 && (
                    <Text style={TextBody}>{text2}</Text>
                )}
            </View>
            {actionButton && actionText ? (
                <TouchableOpacity activeOpacity={0.7} onPress={actionButton} style={ActionButton}>
                    <Text style={ActionText}>{actionText}</Text>
                </TouchableOpacity>
            ) : null}
        </View>
    ),
};
