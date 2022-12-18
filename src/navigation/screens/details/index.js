import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';

export const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Text>Details</Text>
      </View>
    </SafeAreaView>
  );
};
