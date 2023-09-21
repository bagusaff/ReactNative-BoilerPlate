import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// File Imports
import Login from 'screens/auth/LoginScreen';
import ResetPassword from 'screens/auth/ResetPasswordScreen';

//Utils Import
import { LOGIN, RESET_PASSWORD } from 'utils/routesConstant';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={LOGIN}>
            <Stack.Screen component={Login} name={LOGIN} />
            <Stack.Screen component={ResetPassword} name={RESET_PASSWORD} />
        </Stack.Navigator>
    )
}

export default AuthStack;