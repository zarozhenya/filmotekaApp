/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import allGenres from '../../utils/genres.json';
import {styles} from './styles';

export const Stats = ({votes, popularity, originalTitle, genres}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.keys}>
        <Text style={[styles.textKey, {marginBottom: 8}]}>Vote / Votes</Text>
        <Text style={[styles.textKey, {marginBottom: 8}]}>Popularity</Text>
        <Text style={[styles.textKey, {marginBottom: 8}]}>Original Title</Text>
        <Text style={styles.textKey}>Genre</Text>
      </View>
      <View>
        <View style={[styles.textKeyContainer, {marginBottom: 8}]}>
          <View style={styles.votesRatingContainer}>
            <Text style={styles.votesRatingText}>
              {votes.rating.toFixed(1)}
            </Text>
          </View>
          <Text style={[styles.votesCountText, {marginRight: 4}]}>/</Text>
          <View style={styles.votesCountContainer}>
            <Text style={styles.votesCountText}>{votes.count}</Text>
          </View>
        </View>

        <Text style={[styles.textValue, {marginBottom: 8}]}>
          {popularity.toFixed(1)}
        </Text>
        <Text
          style={[
            styles.textValue,
            {textTransform: 'uppercase', marginBottom: 8},
          ]}>
          {originalTitle}
        </Text>
        <Text style={styles.textValue}>
          {genres.map(key => allGenres[key]).join(', ')}
        </Text>
      </View>
    </View>
  );
};
