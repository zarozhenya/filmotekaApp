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
  inputAccent: {
    borderColor: '$accentColor',
  },
});
