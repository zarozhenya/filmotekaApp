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
    alignItems: 'center',
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
  votesRatingText: {
    fontFamily: '$primaryFont',
    fontSize: '$primaryFontSize',
    color: '#ffffff',
  },
  votesRatingContainer: {
    backgroundColor: '$accentColor',
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginRight: 4,
    borderRadius: 8,
  },
  votesCountText: {
    fontFamily: '$primaryFont',
    fontSize: '$primaryFontSize',
    color: '$primaryTextColor',
  },
  votesCountContainer: {
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 8,
  },
});
