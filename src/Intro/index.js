import React from 'react'
import {Image, Text, View} from 'react-native'

import {Button} from 'src/Button'
import {SpaceV} from 'src/Space'
import {FinePrint} from './FinePrint'
import {styles} from './styles'

export const Intro = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('src/assets/splash-logo.png')}
      />
      <SpaceV n={10} />

      <Button
        label="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <SpaceV n={2} />

      <Button
        label="Get Started"
        invert
        onPress={() => alert('Get Started')}
      />
      <SpaceV n={2} />

      <FinePrint />
      <SpaceV n={12} />
    </View>
  )
}
