import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const UserNotLoggedIn = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.flex}>
      <Text style={styles.text}>User is not logged in</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Info')}>
        <Text style={styles.buttonText}>Go to login screen</Text>
      </TouchableOpacity>
    </View>
  );
};
