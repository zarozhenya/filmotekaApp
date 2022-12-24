import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Navigation} from './navigation';
import Config from 'react-native-config';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    console.log(Config.API_URL, Config.API_KEY);
  }, []);
  return <Navigation />;
};

export default App;
