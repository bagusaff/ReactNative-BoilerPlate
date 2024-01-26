import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

//File Imports
import AuthStack from './Auth.stack';
import BottomTabNavigation from 'navigation/BottomNavigation';
import SplashScreen from 'screens/SplashScreen';

//Utils
import { AUTH_STACK, MAIN_NAVIGATION, SPLASH_SCREEN } from 'utils/routesConstant';
import { SafeAreaView } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import useTheme from 'utils/hooks/useTheme';
import PipScreen from 'screens/PipScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    const { NavigationTheme } = useTheme();
    const { colors } = NavigationTheme;

    const navigationRef = useNavigationContainerRef();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.notification }}>
            <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
                <Stack.Navigator
                    initialRouteName={SPLASH_SCREEN}
                    screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
                    <Stack.Screen name={AUTH_STACK} component={AuthStack} />
                    <Stack.Screen name={MAIN_NAVIGATION} component={BottomTabNavigation} />
                </Stack.Navigator>
                <PipScreen />
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default RootStack;