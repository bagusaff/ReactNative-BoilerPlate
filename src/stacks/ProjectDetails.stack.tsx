import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// File Imports
import ProjectDetailsScreen from 'screens/project/ProjectDetails/ProjectDetailsScreen';
import ProjectTaskDetailsScreen from 'screens/project/ProjectDetails/ProjectTaskDetails/ProjectTaskDetailsScreen';
import ProjectTasksScreen from 'screens/project/ProjectDetails/ProjectTasks/ProjectTasksScreen';

//Utils
import { PROJECT_DETAILS, PROJECT_TASKS, PROJECT_TASK_DETAILS } from 'utils/routesConstant';

const Stack = createNativeStackNavigator();

const ProjectDetailsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen component={ProjectTaskDetailsScreen} name={PROJECT_TASK_DETAILS} />
            <Stack.Screen component={ProjectTasksScreen} name={PROJECT_TASKS} />
        </Stack.Navigator>
    )
}

export default ProjectDetailsStack;