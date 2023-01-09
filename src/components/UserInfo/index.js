import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logUserOut} from '../../redux/operations';
import {selectUser} from '../../redux/userSlice';
import {styles} from './styles';

export const UserInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <View>
      <Text style={styles.text}>Hello, {user.email}!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(logUserOut());
        }}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};
