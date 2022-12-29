import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {MoviesList} from '../../../components/MoviesList';
import {QueryInput} from '../../../components/QueryInput';
import {Title} from '../../../components/Title';
import {styles} from './styles';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Title text={'Home'} />
        <QueryInput />
        <MoviesList />
      </View>
    </SafeAreaView>
  );
};
