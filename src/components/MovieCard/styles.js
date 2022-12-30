import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 2 / 3,
    marginBottom: 10,
  },
  title: {
    fontFamily: '$primaryFont',
    fontSize: 20,
    color: '$primaryTextColor',
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  subTitle: {
    fontFamily: '$primaryFont',
    fontSize: '$primaryFontSize',
    color: '$primaryTextColor',
    marginBottom: 8,
  },
  text: {
    fontFamily: '$secondaryFont',
    fontSize: '$primaryFontSize',
    color: '$primaryTextColor',
  },
});
