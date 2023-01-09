import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: '$primaryFont',
    fontSize: '$primaryFontSize',
    color: '$primaryTextColor',
    marginBottom: 8,
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 200,
    padding: 5,
    borderRadius: 8,
    backgroundColor: '$accentColor',
  },
  buttonText: {
    fontFamily: '$primaryFont',
    fontSize: '$primaryFontSize',
    color: '#ffffff',
  },
});
