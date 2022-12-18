import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackScreen} from './homeStack';
import {InfoScreen} from '../screens/info';
import Home from '../../assets/svg/home.svg';
import Settings from '../../assets/svg/settings.svg';

const Tab = createBottomTabNavigator();

export const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => {
          switch (route.name) {
            case 'Home':
              return <Home height={20} width={20} fill={color} />;
            case 'Info':
              return <Settings height={20} width={20} fill={color} />;
            default:
              return <Settings height={20} width={20} fill={color} />;
          }
        },
        tabBarActiveTintColor: '#FF6B08',
      })}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Info" component={InfoScreen} />
    </Tab.Navigator>
  );
};
