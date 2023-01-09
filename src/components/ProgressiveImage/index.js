import React, {useState} from 'react';
import {ActivityIndicator, View, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';

export const ProgressiveImage = ({path, style}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.wrapper}>
      <Image
        source={{
          uri: path,
        }}
        style={style}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
      />
      {isLoading && (
        <ActivityIndicator
          style={styles.indicator}
          color={EStyleSheet.value('$accentColor')}
        />
      )}
    </View>
  );
};
