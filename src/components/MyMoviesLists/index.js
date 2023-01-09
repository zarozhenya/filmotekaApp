import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {firebase} from '@react-native-firebase/database';
import {selectUser, setQueueList, setWatchedList} from '../../redux/userSlice';

export const MyMoviesLists = () => {
  const {uid} = useSelector(selectUser);
  useEffect(() => {
    const ref = firebase
      .app()
      .database(
        'https://filmoteka-29d04-default-rtdb.europe-west1.firebasedatabase.app',
      )
      .ref(`/users/${uid}`);

    const onValueChange = ref.on('value', async snapshot => {
      if (!snapshot.val()) {
        setWatchedList([]);
        setQueueList([]);
        return;
      }
      const {queue, watched} = snapshot.val();
      setWatchedList(watched);
      setQueueList(queue);
    });
    return () => {
      ref.off('value', onValueChange);
    };
  }, [uid]);
  return <Text>List</Text>;
};
