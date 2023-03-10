import React from 'react';
import {Pressable, Text} from 'react-native';
import Config from 'react-native-config';
import {styles} from './styles';
import genres from '../../utils/genres.json';
import {ProgressiveImage} from '../ProgressiveImage';
import {useNavigation} from '@react-navigation/native';

export const ListItem = ({item, index, length}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={index !== length - 1 && styles.itemWithMargin}
      onPress={() => navigation.navigate('Details', {item})}>
      <ProgressiveImage
        path={`${Config.IMAGE_URL}${item.poster_path}`}
        style={styles.image}
      />
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.subText}>
        {item.genre_ids.map(key => genres[key]).join(', ')}
        {' | '}
        {new Date(item.release_date).getFullYear()}
      </Text>
    </Pressable>
  );
};
