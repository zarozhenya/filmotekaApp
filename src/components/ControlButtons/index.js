import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {firebase} from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {selectQueueList, selectWatchedList} from '../../redux/userSlice';

export const ControlButtons = ({item, user}) => {
  const queueList = useSelector(selectQueueList);
  const watchedList = useSelector(selectWatchedList);
  const isInWatchedList = watchedList.some(({id}) => id === item.id);
  const isInQueueList = queueList.some(({id}) => id === item.id);
  const ref = firebase
    .app()
    .database(
      'https://filmoteka-29d04-default-rtdb.europe-west1.firebasedatabase.app',
    )
    .ref(`/users/${user.uid}`);
  const handlePressOnQueueButton = () => {
    ref.once('value').then(snapshot => {
      if (!snapshot.val() || !snapshot.val().queue) {
        const isInWatched = snapshot
          .val()
          ?.watched.some(({id}) => id === item.id);
        if (!isInWatched) {
          ref.update({queue: [item]}).then(() => {
            showMessage({
              message: 'Added to queue!',
              type: 'success',
              icon: 'success',
            });
          });
        } else {
          showMessage({
            message: 'Already in watched!',
            type: 'danger',
            icon: 'danger',
          });
        }
        return;
      }
      const isInQueue = snapshot.val().queue.some(({id}) => id === item.id);
      const isInWatched =
        snapshot.val().watched?.some(({id}) => id === item.id) ?? false;
      if (!isInQueue && !isInWatched) {
        ref.update({queue: [...snapshot.val().queue, item]}).then(() => {
          showMessage({
            message: 'Added to queue!',
            type: 'success',
            icon: 'success',
          });
        });
      } else {
        showMessage({
          message: 'Already in queue or watched!',
          type: 'danger',
          icon: 'danger',
        });
      }
    });
  };
  const handlePressOnWatchedButton = () => {
    ref.once('value').then(snapshot => {
      if (!snapshot.val() || !snapshot.val().watched) {
        const isInQueue = snapshot.val()?.queue.some(({id}) => id === item.id);
        if (!isInQueue) {
          ref.update({watched: [item]}).then(() => {
            showMessage({
              message: 'Added to watched!',
              type: 'success',
              icon: 'success',
            });
          });
        } else {
          showMessage({
            message: 'Already in queue!',
            type: 'danger',
            icon: 'danger',
          });
        }
        return;
      }
      const isInWatched = snapshot.val().watched.some(({id}) => id === item.id);
      const isInQueue =
        snapshot.val().queue?.some(({id}) => id === item.id) ?? false;
      if (!isInWatched && !isInQueue) {
        ref.update({watched: [...snapshot.val().watched, item]}).then(() => {
          showMessage({
            message: 'Added to watched!',
            type: 'success',
            icon: 'success',
          });
        });
      } else {
        showMessage({
          message: 'Already in queue or watched!',
          type: 'danger',
          icon: 'danger',
        });
      }
    });
  };
  const handlePressOnRemoveFromQueueList = () => {
    const filteredQueueList = queueList.filter(({id}) => id !== item.id);
    ref.set({queue: filteredQueueList}).then(() => {
      showMessage({
        message: 'Removed from queue!',
        type: 'success',
        icon: 'success',
      });
    });
  };
  const handlePressOnRemoveFromWatchedList = () => {
    const filteredWatchedList = watchedList.filter(({id}) => id !== item.id);
    ref.set({watched: filteredWatchedList}).then(() => {
      showMessage({
        message: 'Removed from watched!',
        type: 'success',
        icon: 'success',
      });
    });
  };
  const handlePressOnMoveToWatchedList = () => {
    const filteredQueueList = queueList.filter(({id}) => id !== item.id);
    ref
      .set({queue: filteredQueueList, watched: [...watchedList, item]})
      .then(() => {
        showMessage({
          message: 'Moved to watched!',
          type: 'success',
          icon: 'success',
        });
      });
  };
  const handlePressOnMoveToQueueList = () => {
    const filteredWatchedList = watchedList.filter(({id}) => id !== item.id);
    ref
      .set({watched: filteredWatchedList, queue: [...queueList, item]})
      .then(() => {
        showMessage({
          message: 'Moved to queue!',
          type: 'success',
          icon: 'success',
        });
      });
  };
  return (
    <View style={styles.buttonContainer}>
      {!isInWatchedList && !isInQueueList ? (
        <>
          <TouchableOpacity
            onPress={handlePressOnQueueButton}
            style={[styles.button, styles.buttonQueue]}>
            <Text style={[styles.buttonText, styles.buttonTextQueue]}>
              Add to queue
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePressOnWatchedButton}
            style={[styles.button, styles.buttonWatched]}>
            <Text style={[styles.buttonText, styles.buttonTextWatched]}>
              Add to watched
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            onPress={
              isInQueueList
                ? handlePressOnRemoveFromQueueList
                : handlePressOnMoveToQueueList
            }
            style={[styles.button, styles.buttonQueue]}>
            <Text style={[styles.buttonText, styles.buttonTextQueue]}>
              {isInQueueList ? 'Remove' : 'Move to queue'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
              isInWatchedList
                ? handlePressOnRemoveFromWatchedList
                : handlePressOnMoveToWatchedList
            }
            style={[styles.button, styles.buttonWatched]}>
            <Text style={[styles.buttonText, styles.buttonTextWatched]}>
              {isInWatchedList ? 'Remove' : 'Move to watched'}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
