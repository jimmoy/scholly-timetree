import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fefefe',
    justifyContent: 'center',
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
