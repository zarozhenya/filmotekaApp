import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {MyMoviesLists} from '../../../components/MyMoviesLists';
import {Title} from '../../../components/Title';
import {UserNotLoggedIn} from '../../../components/UserNotLoggedIn';
import {selectUser} from '../../../redux/userSlice';
import {styles} from './styles';

export const MovieScreen = () => {
  const user = useSelector(selectUser);
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Title text="Movies" />
        {user ? <MyMoviesLists /> : <UserNotLoggedIn />}
      </View>
    </SafeAreaView>
  );
};
