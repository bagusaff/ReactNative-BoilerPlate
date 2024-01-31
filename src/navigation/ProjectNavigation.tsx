import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//File Import
import ProjectTimelineScreen from 'screens/project/ProjectTimeline/ProjectTimelineScreen';
import ProjectChatScreen from 'screens/project/ProjectChat/ProjectChatScreen';
import ProjectDetailsScreen from 'screens/project/ProjectDetails/ProjectDetailsScreen';

//Utils Import
import { PROJECT_CHAT, PROJECT_DETAILS, PROJECT_TIMELINE } from 'utils/routesConstant';

const Tab = createBottomTabNavigator();

const ProjectBottomNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName={PROJECT_DETAILS}
            screenOptions={{ headerShown: false }}>
            <Tab.Screen name={PROJECT_DETAILS} component={ProjectDetailsScreen} />
            <Tab.Screen name={PROJECT_TIMELINE} component={ProjectTimelineScreen} />
            <Tab.Screen name={PROJECT_CHAT} component={ProjectChatScreen} />
        </Tab.Navigator>
    );
}

export default ProjectBottomNavigation;