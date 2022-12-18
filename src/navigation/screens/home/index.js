import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Text onPress={() => navigation.navigate('Details')}>Home</Text>
      </View>
    </SafeAreaView>
  );
};
