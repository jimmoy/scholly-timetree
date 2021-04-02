// By Jim Moy, for Scholly interview, Apr 2021
import React, {useCallback} from 'react'
import {Text, View} from 'react-native'

import {primaryColor} from 'src/colors'

export const FinePrint = () => {
  const linkTerms = useCallback(() => {
    alert('terms')
  }, [])
  const linkPolicy = useCallback(() => {
    alert('policy')
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        By selecting one or the other, you are agreeing to the
        <Text style={styles.link} onPress={linkTerms}>
          {' '}
          Terms of Service{' '}
        </Text>{' '}
        &amp;
        <Text style={styles.link} onPress={linkPolicy}>
          {' '}
          Privacy Policy{' '}
        </Text>
        .
      </Text>
    </View>
  )
}

const styles = {
  container: {
    alignItems: 'center',
    width: '75%',
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
  },
  link: {
    color: primaryColor,
    fontWeight: '800',
  },
}
