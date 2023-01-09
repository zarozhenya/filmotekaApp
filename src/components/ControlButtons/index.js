import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {firebase} from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';
import {styles} from './styles';

export const ControlButtons = ({item, user}) => {
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
  return (
    <View style={styles.buttonContainer}>
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
    </View>
  );
};
