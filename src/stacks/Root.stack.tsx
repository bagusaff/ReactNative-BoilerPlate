import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

//File Imports
import AuthStack from './Auth.stack';
import SplashScreen from 'screens/SplashScreen';
import DrawerNavigation from 'navigation/DrawerNavigation';

//Utils
import { AUTH_STACK, MAIN_NAVIGATION, SPLASH_SCREEN } from 'utils/routesConstant';
import useTheme from 'utils/hooks/useTheme';
import PipScreen from 'screens/PipScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    const { NavigationTheme } = useTheme();
    const { colors } = NavigationTheme;

    const navigationRef = useNavigationContainerRef();
    return (
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
            <Stack.Navigator
                initialRouteName={SPLASH_SCREEN}
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
                <Stack.Screen name={AUTH_STACK} component={AuthStack} />
                <Stack.Screen name={MAIN_NAVIGATION} component={DrawerNavigation} />
            </Stack.Navigator>
            {/* <PipScreen /> */}
        </NavigationContainer>
    );
};

export default RootStack;