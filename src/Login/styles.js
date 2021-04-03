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
    width: '100%',
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
    width: 300,
    borderRadius: 4,
  },
  input: {
    padding: 8,
    backgroundColor: '#fff',
  },
})
