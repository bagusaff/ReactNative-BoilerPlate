import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//File Import
import HomeStack from 'stacks/Home.stack';
import ProjectDetailsStack from 'stacks/ProjectDetails.stack';

//Utils Import
import { PROJECT_CHAT_STACK, PROJECT_DETAILS_STACK, PROJECT_TIMELINE_STACK } from 'utils/routesConstant';
import ProjectTimelineStack from 'stacks/ProjectTimeline.stack';
import ProjectChatStack from 'stacks/ProjectChat.stack';

const Tab = createBottomTabNavigator();

const ProjectBottomNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName={PROJECT_DETAILS_STACK}
            screenOptions={{ headerShown: false }}>
            <Tab.Screen name={PROJECT_DETAILS_STACK} component={ProjectDetailsStack} />
            <Tab.Screen name={PROJECT_TIMELINE_STACK} component={ProjectTimelineStack} />
            <Tab.Screen name={PROJECT_CHAT_STACK} component={ProjectChatStack} />
        </Tab.Navigator>
    );
}

export default ProjectBottomNavigation;