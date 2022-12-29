import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Navigation} from './navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Provider} from 'react-redux';
import {store} from './redux/store';

EStyleSheet.build({
  $primaryFont: 'Roboto-Medium',
  $titleFontFamily: 'Roboto-Black',
  $primaryFontSize: 14,
  $titleFontSize: 24,
  $primaryTextColor: '#000000',
  $accentColor: '#FF6B08',
});

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
