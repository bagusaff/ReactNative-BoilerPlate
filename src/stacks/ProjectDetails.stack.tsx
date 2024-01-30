import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// File Imports
import ProjectDetailsScreen from 'screens/project/ProjectDetails/ProjectDetailsScreen';

//Utils
import { PROJECT_DETAILS } from 'utils/routesConstant';

const Stack = createNativeStackNavigator();

const ProjectDetailsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={PROJECT_DETAILS}>
            <Stack.Screen component={ProjectDetailsScreen} name={PROJECT_DETAILS} />
        </Stack.Navigator>
    )
}

export default ProjectDetailsStack;