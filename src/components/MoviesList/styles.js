import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  emptyText: {
    fontFamily: '$primaryFont',
    fontSize: '$primaryFontSize',
    color: '$primaryTextColor',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 2 / 3,
  },
});
