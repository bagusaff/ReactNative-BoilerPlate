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
import { changeTheme } from 'store/theme'
import useTheme from 'utils/hooks/useTheme'

const Login = ({ route, navigation }: NativeStackScreenProps<RootStackParams, 'LoginScreen'>) => {
    const dispatch = useDispatch();
    const { Fonts } = useTheme();
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
            <TouchableOpacity onPress={handleChangeDarkMode}>
                <Text style={[Fonts.textBold, Fonts.textCenter, Fonts.textSmall]}>LoginScreen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleChangeDefault}>
                <Text style={[Fonts.textBold, Fonts.textCenter, Fonts.textSmall]}>Default Theme</Text>
            </TouchableOpacity>
        </Container>
    )
}

export default Login

const styles = StyleSheet.create({})