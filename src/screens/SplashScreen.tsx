import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, StackActions } from '@react-navigation/native';

//Custom Components
import Container from 'components/Container'

//Utils Import
import { AUTH_STACK } from 'utils/routesConstant';

const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(StackActions.replace(AUTH_STACK));
        }, 1000);
    }, []);
    return (
        <Container>
            <Text>SplashScreen</Text>
        </Container>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})