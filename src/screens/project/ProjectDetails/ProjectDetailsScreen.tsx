import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RootStackParams } from 'utils/routes'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PROJECT_DETAILS_STACK, PROJECT_TASKS, PROJECT_TASK_DETAILS } from 'utils/routesConstant'

const ProjectDetailsScreen = ({ route, navigation }: NativeStackScreenProps<RootStackParams, 'ProjectDetailsScreen'>) => {
    return (
        <View style={{ flex: 1, padding: 8 }}>
            <Text style={{ color: 'red' }}>ProjectDetails</Text>
            <TouchableOpacity style={{ backgroundColor: 'blue', borderRadius: 4, padding: 4, alignSelf: 'flex-start' }} onPress={() => navigation.navigate(PROJECT_DETAILS_STACK, { screen: PROJECT_TASKS })}>
                <Text> Navigate </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProjectDetailsScreen

const styles = StyleSheet.create({})