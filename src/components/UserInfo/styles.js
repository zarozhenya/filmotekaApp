import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  text: {
    fontFamily: '$primaryFont',
    fontSize: '$primaryFontSize',
    color: '$primaryTextColor',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#ff0000',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 120,
    padding: 5,
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: '$primaryFont',
    fontSize: '$primaryFontSize',
    color: '#ffffff',
  },
});
