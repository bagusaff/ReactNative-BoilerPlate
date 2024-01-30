import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ProjectChatRoomScreen from 'screens/project/ProjectChat/ProjectChatRoom/ProjectChatRoomScreen';

// File Imports
import ProjectChatScreen from 'screens/project/ProjectChat/ProjectChatScreen';

//Utils
import { PROJECT_CHAT, PROJECT_CHAT_ROOM } from 'utils/routesConstant';

const Stack = createNativeStackNavigator();

const ProjectChatStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={PROJECT_CHAT}>
            <Stack.Screen component={ProjectChatScreen} name={PROJECT_CHAT} />
            <Stack.Screen component={ProjectChatRoomScreen} name={PROJECT_CHAT_ROOM} />
        </Stack.Navigator>
    )
}

export default ProjectChatStack;