import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

export const EmptyList = () => {
  return <Text style={styles.emptyText}>No items.</Text>;
};
