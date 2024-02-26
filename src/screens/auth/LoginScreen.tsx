import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackActions } from '@react-navigation/native'

//Custom Components
import Container from 'components/Container'

//Utils
import { RootStackParams } from 'utils/routes'
import { MAIN_NAVIGATION } from 'utils/routesConstant'
import { useDispatch } from 'react-redux'
import { changeTheme } from 'store/slices/theme'
import useTheme from 'utils/hooks/useTheme'
import { useIntl } from 'react-intl'
import TextInput from 'components/TextInput'

const Login = ({ route, navigation }: NativeStackScreenProps<RootStackParams, 'LoginScreen'>) => {
    const dispatch = useDispatch();
    const { Fonts } = useTheme();
    const intl = useIntl();
    /**
     * States
     */


    /**
     * Functions
     */

    const handleChangeDarkMode = () => {
        dispatch(changeTheme({ theme: 'default_dark', darkMode: true }));
    }

    const handleChangeDefault = () => {
        dispatch(changeTheme({ theme: 'default', darkMode: false }));
    }

    return (
        <Container>
            <TouchableOpacity onPress={() => {
                navigation.dispatch(StackActions.replace(MAIN_NAVIGATION));
            }}>
                <Text style={[Fonts.fontBold, Fonts.textCenter, Fonts.sizeSmall]}>{intl.formatMessage({ defaultMessage: 'LoginScreen' })}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleChangeDefault}>
                <Text style={[Fonts.fontBold, Fonts.textCenter, Fonts.sizeSmall]}>{intl.formatMessage({ defaultMessage: 'Default Theme' })}</Text>
            </TouchableOpacity>
            <TextInput placeholder='Username' />
            <TextInput type='password' placeholder='Password' />
        </Container>
    )
}

export default Login

const styles = StyleSheet.create({})