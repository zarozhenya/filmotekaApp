import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 120,
    padding: 5,
    borderRadius: 8,
  },
  buttonWatched: {
    backgroundColor: '$accentColor',
  },
  buttonQueue: {
    borderColor: '$primaryTextColor',
    borderWidth: 0.5,
    marginRight: 10,
  },
  buttonText: {
    fontFamily: '$primaryFont',
    fontSize: '$primaryFontSize',
  },
  buttonTextWatched: {
    color: '#ffffff',
  },
  buttonTextQueue: {
    color: '$primaryTextColor',
  },
  buttonContainer: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
