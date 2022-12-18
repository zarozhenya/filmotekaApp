import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './stack';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
