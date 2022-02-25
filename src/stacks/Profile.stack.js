import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// File Imports
import ProfileScreen from 'screens/profile/ProfileScreen';

const ProfileStackScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStackScreen;
