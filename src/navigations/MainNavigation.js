import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

// Screen Imports
import HomeStack from 'stacks/Home.stack';
import ProfileStack from 'stacks/Profile.stack';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
