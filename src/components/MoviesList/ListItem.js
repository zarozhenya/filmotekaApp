import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import Config from 'react-native-config';
import {styles} from './styles';
import genres from '../../utils/genres.json';

export const ListItem = ({item, index, length}) => {
  return (
    <TouchableOpacity style={index !== length - 1 && styles.itemWithMargin}>
      <Image
        source={{
          uri: `${Config.IMAGE_URL}${item.poster_path}`,
        }}
        style={styles.image}
      />
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.subText}>
        {item.genre_ids.map(key => genres[key]).join(', ')}
        {' | '}
        {new Date(item.release_date).getFullYear()}
      </Text>
    </TouchableOpacity>
  );
};
