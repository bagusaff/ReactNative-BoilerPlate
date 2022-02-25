import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// File Imports
import HomeScreen from 'screens/home/HomeScreen';

const HomeStackScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
