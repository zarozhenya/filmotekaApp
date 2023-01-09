import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  input: {
    fontFamily: '$primaryFont',
    fontSize: '$primaryFontSize',
    color: '$primaryTextColor',
    borderWidth: 0.5,
    borderColor: '$primaryTextColor',
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 16,
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
    width: 120,
    padding: 5,
    borderRadius: 8,
  },
  buttonSignIn: {
    backgroundColor: '$accentColor',
  },
  buttonSignUp: {
    borderColor: '$primaryTextColor',
    borderWidth: 0.5,
    marginRight: 10,
  },
  buttonText: {
    fontFamily: '$primaryFont',
    fontSize: '$primaryFontSize',
  },
  buttonTextSignIn: {
    color: '#ffffff',
  },
  buttonTextSignUp: {
    color: '$primaryTextColor',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
