import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStack} from './stack';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
