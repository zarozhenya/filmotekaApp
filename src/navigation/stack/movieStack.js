import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MovieScreen} from '../screens/movies';
import {DetailsScreen} from '../screens/details';

const MovieStack = createNativeStackNavigator();

export const MovieStackScreen = () => {
  return (
    <MovieStack.Navigator>
      <MovieStack.Screen
        name="HomeScreen"
        component={MovieScreen}
        options={{headerShown: false}}
      />
      <MovieStack.Screen name="Details" component={DetailsScreen} />
    </MovieStack.Navigator>
  );
};
