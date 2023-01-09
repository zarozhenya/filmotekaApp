import React from 'react';
import {ScrollView, Text} from 'react-native';
import Config from 'react-native-config';
import {useSelector} from 'react-redux';

import {selectUser} from '../../redux/userSlice';
import {ProgressiveImage} from '../ProgressiveImage';
import {Stats} from '../Stats';
import {styles} from './styles';
import {ControlButtons} from '../ControlButtons';

export const MovieCard = ({item}) => {
  const user = useSelector(selectUser);
  return (
    <ScrollView>
      <ProgressiveImage
        path={`${Config.IMAGE_URL}${item.poster_path}`}
        style={styles.image}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Stats
        votes={{rating: item.vote_average, count: item.vote_count}}
        popularity={item.popularity}
        originalTitle={item.original_title}
        genres={item.genre_ids}
      />
      <Text style={styles.subTitle}>ABOUT</Text>
      <Text style={styles.text}>{item.overview}</Text>
      {user && <ControlButtons user={user} item={item} />}
    </ScrollView>
  );
};
