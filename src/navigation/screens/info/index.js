import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Login} from '../../../components/Login';
import {Title} from '../../../components/Title';
import {styles} from './styles';

export const InfoScreen = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Title text="Info" />
        <Login />
      </View>
    </SafeAreaView>
  );
};
