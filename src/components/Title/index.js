import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

export const Title = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};
