import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {firebase} from '@react-native-firebase/database';
import {
  selectQueueList,
  selectUser,
  selectWatchedList,
  setQueueList,
  setWatchedList,
} from '../../redux/userSlice';
import {styles} from './styles';
import {EmptyList} from './EmptyList';
import {ListItem} from './ListItem';

export const MyMoviesLists = () => {
  const dispatch = useDispatch();
  const {uid} = useSelector(selectUser);
  const [isShowingWatched, setIsShowingWatched] = useState(true);
  const queueList = useSelector(selectQueueList);
  const watchedList = useSelector(selectWatchedList);
  useEffect(() => {
    const ref = firebase
      .app()
      .database(
        'https://filmoteka-29d04-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref(`/users/${uid}`);

    const onValueChange = ref.on('value', async snapshot => {
      if (!snapshot.val()) {
        dispatch(setWatchedList([]));
        dispatch(setQueueList([]));
        return;
      }
      const {queue, watched} = snapshot.val();
      dispatch(setWatchedList(watched || []));
      dispatch(setQueueList(queue || []));
    });
    return () => {
      ref.off('value', onValueChange);
    };
  }, [dispatch, uid]);

  return (
    <View style={styles.flex}>
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
      <FlatList
        data={isShowingWatched ? watchedList : queueList}
        ListEmptyComponent={<EmptyList />}
        renderItem={({item, index}) => (
          <ListItem
            item={item}
            index={index}
            length={isShowingWatched ? watchedList.length : queueList.length}
          />
        )}
      />
    </View>
  );
};
