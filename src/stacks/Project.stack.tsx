import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// File Imports
import ProjectHomeScreen from 'screens/project/ProjectHome/ProjectHomeScreen';
import ProjectBottomNavigation from 'navigation/ProjectNavigation';

//Utils
import { PROJECT_HOME, PROJECT_NAVIGATION } from 'utils/routesConstant';

const Stack = createNativeStackNavigator();

const ProjectStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={PROJECT_HOME}>
            <Stack.Screen component={ProjectHomeScreen} name={PROJECT_HOME} />
            <Stack.Screen component={ProjectBottomNavigation} name={PROJECT_NAVIGATION} />
        </Stack.Navigator>
    )
}

export default ProjectStack;