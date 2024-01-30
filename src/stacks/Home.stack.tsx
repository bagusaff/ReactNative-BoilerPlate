import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// File Imports
import HomeScreen from 'screens/home/HomeScreen';

//Utils
import { HOME } from 'utils/routesConstant';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={HOME}>
            <Stack.Screen component={HomeScreen} name={HOME} />
        </Stack.Navigator>
    )
}

export default HomeStack;