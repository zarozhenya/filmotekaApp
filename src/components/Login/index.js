import React, {useEffect, useState} from 'react';
import {Keyboard, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {logUserOut, signUserIn} from '../../redux/operations';
import {selectError, selectUser} from '../../redux/userSlice';
import {styles} from './styles';

export const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const error = useSelector(selectError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    if (error) {
      showMessage({message: error, type: 'danger', icon: 'danger'});
    }
  }, [error]);

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />

      {user !== null ? (
        <TouchableOpacity
          onPress={() => {
            dispatch(logUserOut());
          }}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            dispatch(signUserIn({email, password}));
            Keyboard.dismiss();
          }}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
