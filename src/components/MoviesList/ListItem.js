import React from 'react';
import {View, Image} from 'react-native';
import Config from 'react-native-config';
import {styles} from './styles';

export const ListItem = ({item}) => {
  console.log(Config);
  return (
    <View>
      <Image
        source={{
          uri: `${Config.IMAGE_URL}${item.poster_path}`,
        }}
        style={styles.image}
      />
    </View>
  );
};
