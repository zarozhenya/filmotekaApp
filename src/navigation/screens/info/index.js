import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Title} from '../../../components/Title';
import {styles} from './styles';

export const InfoScreen = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Title text="Info" />
      </View>
    </SafeAreaView>
  );
};
