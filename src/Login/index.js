import React from 'react'
import {Image, View} from 'react-native'

import {Button} from 'src/Button'
import {SpaceV} from 'src/Space'
import {styles} from './styles'

export const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('src/assets/splash-logo.png')}
      />
    </View>
  )
}
