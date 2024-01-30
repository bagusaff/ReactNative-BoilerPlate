import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from 'utils/routes'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'



// DrawerNavigationProp for the drawer navigator
type DrawerNavigationPropType = DrawerNavigationProp<RootStackParams, 'ProjectHomeScreen'>;

const ProjectHomeScreen = ({ route, navigation }: NativeStackScreenProps<RootStackParams, 'ProjectHomeScreen'>) => {
    const drawerNav = useNavigation<DrawerNavigationPropType>();
    const toggleDrawer = () => {
        drawerNav.toggleDrawer();
    }
    const navigateToProjectDetails = () => {
        navigation.navigate('ProjectBottomNavigation')
    }
    return (
        <View>
            <TouchableOpacity onPress={toggleDrawer} style={{ backgroundColor: 'green', padding: 8, borderRadius: 8, alignSelf: 'flex-start' }}>
                <Text>Toggle Drawer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToProjectDetails} style={{ backgroundColor: 'green', padding: 8, borderRadius: 8, alignSelf: 'flex-start' }}>
                <Text>Navigate</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProjectHomeScreen

const styles = StyleSheet.create({})