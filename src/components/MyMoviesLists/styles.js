import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 120,
    padding: 8,
    borderRadius: 8,
  },
  buttonActive: {
    backgroundColor: '$accentColor',
  },
  buttonInactive: {
    borderColor: '$primaryTextColor',
    borderWidth: 0.5,
  },
  buttonQueue: {
    marginRight: 10,
  },
  buttonText: {
    fontFamily: '$primaryFont',
    fontSize: '$primaryFontSize',
  },
  buttonTextActive: {
    color: '#ffffff',
  },
  buttonTextInactive: {
    color: '$primaryTextColor',
  },
  buttonContainer: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
