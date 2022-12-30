import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {MovieCard} from '../../../components/MovieCard';
import {styles} from './styles';

export const DetailsScreen = ({route}) => {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <MovieCard item={route.params.item} />
      </View>
    </SafeAreaView>
  );
};
