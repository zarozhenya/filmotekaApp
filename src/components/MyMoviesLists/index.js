import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {firebase} from '@react-native-firebase/database';
import {selectUser, setQueueList, setWatchedList} from '../../redux/userSlice';
import {styles} from './styles';

export const MyMoviesLists = () => {
  const {uid} = useSelector(selectUser);
  const [isShowingWatched, setIsShowingWatched] = useState(true);
  useEffect(() => {
    const ref = firebase
      .app()
      .database(
        'https://filmoteka-29d04-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref(`/users/${uid}`);

    const onValueChange = ref.on('value', async snapshot => {
      if (!snapshot.val()) {
        setWatchedList([]);
        setQueueList([]);
        return;
      }
      const {queue, watched} = snapshot.val();
      setWatchedList(watched || []);
      setQueueList(queue || []);
    });
    return () => {
      ref.off('value', onValueChange);
    };
  }, [uid]);

  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => setIsShowingWatched(false)}
          style={[
            styles.button,
            styles.buttonQueue,
            !isShowingWatched ? styles.buttonActive : styles.buttonInactive,
          ]}>
          <Text
            style={[
              styles.buttonText,
              !isShowingWatched
                ? styles.buttonTextActive
                : styles.buttonTextInactive,
            ]}>
            Queue
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsShowingWatched(true)}
          style={[
            styles.button,
            isShowingWatched ? styles.buttonActive : styles.buttonInactive,
          ]}>
          <Text
            style={[
              styles.buttonText,
              isShowingWatched
                ? styles.buttonTextActive
                : styles.buttonTextInactive,
            ]}>
            Watched
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
