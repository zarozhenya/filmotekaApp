import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  keys: {
    marginRight: 40,
  },
  textKeyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textKey: {
    fontFamily: '$primaryFont',
    fontSize: '$primaryFontSize',
    color: '$secondaryTextColor',
  },
  textValue: {
    fontFamily: '$primaryFont',
    fontSize: '$primaryFontSize',
    color: '$primaryTextColor',
    overflow: 'scroll',
  },
});
