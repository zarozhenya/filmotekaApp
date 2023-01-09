import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  flex: {
    flex: 1,
  },
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
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
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
