import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackScreen} from './homeStack';
import {InfoScreen} from '../screens/info';

const Tab = createBottomTabNavigator();

export const MainStack = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Info" component={InfoScreen} />
    </Tab.Navigator>
  );
};
