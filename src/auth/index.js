import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {setUserOnAuthStateChanged} from '../redux/userSlice';

export const Auth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      dispatch(
        setUserOnAuthStateChanged(
          JSON.stringify(user && {email: user.email, uid: user.uid}),
        ),
      );
    });
  }, [dispatch]);
  return <></>;
};
