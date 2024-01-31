import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// File Imports
import ProjectHomeScreen from 'screens/project/ProjectHome/ProjectHomeScreen';
import ProjectBottomNavigation from 'navigation/ProjectNavigation';

//Utils
import { PROJECT_CHAT_STACK, PROJECT_DETAILS_STACK, PROJECT_HOME, PROJECT_NAVIGATION, PROJECT_TIMELINE_STACK } from 'utils/routesConstant';
import ProjectDetailsStack from './ProjectDetails.stack';
import ProjectTimelineStack from './ProjectTimeline.stack';
import ProjectChatStack from './ProjectChat.stack';

const Stack = createNativeStackNavigator();

const ProjectStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={PROJECT_HOME}>
            <Stack.Screen component={ProjectHomeScreen} name={PROJECT_HOME} />
            <Stack.Screen component={ProjectBottomNavigation} name={PROJECT_NAVIGATION} />
            <Stack.Screen component={ProjectDetailsStack} name={PROJECT_DETAILS_STACK} />
            <Stack.Screen component={ProjectTimelineStack} name={PROJECT_TIMELINE_STACK} />
            <Stack.Screen component={ProjectChatStack} name={PROJECT_CHAT_STACK} />
        </Stack.Navigator>
    )
}

export default ProjectStack;