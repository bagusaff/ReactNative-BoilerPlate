import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//File Import
import HomeStack from 'stacks/Home.stack';

//Utils Import
import { HOME_STACK } from 'utils/routesConstant';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName={HOME_STACK}
            screenOptions={{ headerShown: false }}>
            <Tab.Screen name={HOME_STACK} component={HomeStack} />
        </Tab.Navigator>
    );
}

export default BottomNavigation;