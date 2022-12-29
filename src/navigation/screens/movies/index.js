import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Title} from '../../../components/Title';
import {styles} from './styles';

export const MovieScreen = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Title text="Movies" />
      </View>
    </SafeAreaView>
  );
};
