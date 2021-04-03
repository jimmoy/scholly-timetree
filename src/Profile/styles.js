import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fefefe',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fefefe',
    justifyContent: 'center',
  },
  addPhoto: {
    color: 'white',
    position: 'relative',
    fontSize: 14,
    fontWeight: '500',
    top: -50,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  },
  errorContainer: {
    width: '50%',
    height: 50,
    alignItems: 'center',
  },
  errMsg: {
    color: '#c00',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  fields: {
    width: '70%',
    borderRadius: 4,
  },
  input: {
    padding: 8,
    backgroundColor: '#fff',
  },
})
