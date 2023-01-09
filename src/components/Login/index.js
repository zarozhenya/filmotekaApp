import React, {useEffect, useState} from 'react';
import {Keyboard, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {signUserIn, signUserUp} from '../../redux/operations';
import {selectError} from '../../redux/userSlice';
import {styles} from './styles';

export const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    if (error) {
      let errorMessage;
      switch (error) {
        case 'auth/wrong-password':
          errorMessage = 'Wrong password';
          break;
        case 'auth/user-not-found':
          errorMessage = 'User not found';
          break;
        case 'auth/email-already-in-use':
          errorMessage = 'Email already in use';
          break;
        case 'auth/weak-password':
          errorMessage = 'Weak password';
          break;
        default:
          errorMessage = 'Error occured';
      }
      showMessage({message: errorMessage, type: 'danger', icon: 'danger'});
    }
  }, [error]);

  return (
    <View>
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonSignUp]}
          onPress={() => {
            dispatch(signUserUp({email, password}));
            Keyboard.dismiss();
          }}>
          <Text style={[styles.buttonText, styles.buttonTextSignUp]}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonSignIn]}
          onPress={() => {
            dispatch(signUserIn({email, password}));
            Keyboard.dismiss();
          }}>
          <Text style={[styles.buttonText, styles.buttonTextSignIn]}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
