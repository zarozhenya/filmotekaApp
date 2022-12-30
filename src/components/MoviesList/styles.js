import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  emptyText: {
    fontFamily: '$primaryFont',
    fontSize: '$primaryFontSize',
    color: '$primaryTextColor',
    textAlign: 'center',
  },
  text: {
    fontFamily: '$primaryFont',
    fontSize: '$primaryFontSize',
    color: '$primaryTextColor',
    textTransform: 'uppercase',
  },
  subText: {
    fontFamily: '$primaryFont',
    fontSize: '$primaryFontSize',
    color: '$accentColor',
  },
  image: {
    width: '100%',
    aspectRatio: 2 / 3,
    marginBottom: 10,
  },
  itemWithMargin: {
    marginBottom: 15,
  },
});
