import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from 'utils/routes'
import useTheme from 'utils/hooks/useTheme'
import { DrawerActions } from '@react-navigation/native'

const HomeScreen = ({ route, navigation }: NativeStackScreenProps<RootStackParams, 'HomeScreen'>) => {
    const { Colors, Fonts } = useTheme();
    return (
        <View style={{ flex: 1, backgroundColor: Colors.background, padding: 16 }}>
            <Text style={[Fonts.textRegular, Fonts.textSecondary]}>a sad asd dasdHome alskdja lksdj alskjdlka jsdlkj asdklj asdklj asdlkj</Text>
            <TouchableOpacity style={{ backgroundColor: Colors.blue, padding: 4, borderRadius: 8, alignSelf: 'flex-start' }} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                <Text>Open Drawer</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})