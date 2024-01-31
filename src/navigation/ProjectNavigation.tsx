import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//File Import
import HomeStack from 'stacks/Home.stack';
import ProjectDetailsStack from 'stacks/ProjectDetails.stack';

//Utils Import
import { PROJECT_CHAT, PROJECT_CHAT_STACK, PROJECT_DETAILS, PROJECT_DETAILS_STACK, PROJECT_TIMELINE, PROJECT_TIMELINE_STACK } from 'utils/routesConstant';
import ProjectTimelineStack from 'stacks/ProjectTimeline.stack';
import ProjectChatStack from 'stacks/ProjectChat.stack';
import ProjectTimelineScreen from 'screens/project/ProjectTimeline/ProjectTimelineScreen';
import ProjectChatScreen from 'screens/project/ProjectChat/ProjectChatScreen';
import ProjectDetailsScreen from 'screens/project/ProjectDetails/ProjectDetailsScreen';

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