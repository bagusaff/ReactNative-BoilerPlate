import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

// File Imports
import SplashScreen from 'screens/SplashScreen';
import AuthNavigation from './Auth.stack';
import MainNavigation from 'navigations/MainNavigation';

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="AuthNavigation" component={AuthNavigation} />
      <RootStack.Screen name="MainNavigation" component={MainNavigation} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
