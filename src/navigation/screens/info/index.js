import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Login} from '../../../components/Login';
import {Title} from '../../../components/Title';
import {UserInfo} from '../../../components/UserInfo';
import {selectUser} from '../../../redux/userSlice';
import {styles} from './styles';

export const InfoScreen = () => {
  const user = useSelector(selectUser);
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Title text="Info" />
        {user ? <UserInfo /> : <Login />}
      </View>
    </SafeAreaView>
  );
};
