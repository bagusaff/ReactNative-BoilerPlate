import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// File Imports
import ProjectTimelineScreen from 'screens/project/ProjectTimeline/ProjectTimelineScreen';

//Utils
import { PROJECT_TIMELINE } from 'utils/routesConstant';

const Stack = createNativeStackNavigator();

const ProjectTimelineStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={PROJECT_TIMELINE}>
            <Stack.Screen component={ProjectTimelineScreen} name={PROJECT_TIMELINE} />
        </Stack.Navigator>
    )
}

export default ProjectTimelineStack;