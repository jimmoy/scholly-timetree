// By Jim Moy, for Scholly interview, Apr 2021
import React from 'react'
import {Animated, View} from 'react-native'

import {styles} from './styles'
import {useSegueAnimation} from './hooks'

export const Segue = ({finished}) => {
  const {
    blueAnimation,
    greenAnimation,
    redAnimation,
    yellowAnimation,
    purpleAnimation,
  } = useSegueAnimation(finished)

  return (
    <View style={styles.backgroundStyle}>
      <Animated.View style={[styles.blue, blueAnimation]} />
      <Animated.View style={[styles.green, greenAnimation]} />
      <Animated.View style={[styles.red, redAnimation]} />
      <Animated.View style={[styles.yellow, yellowAnimation]} />
      <Animated.View style={[styles.purple, purpleAnimation]} />
    </View>
  )
}
