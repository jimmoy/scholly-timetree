import React, {useEffect, useRef, useState} from 'react'
import {
  Animated,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'

// Finger widths, clockwise from blue:
// 170
// 150
// 128
// 150
// 170

export const Segue: () => Node = () => {
  const blueValue = useRef(new Animated.Value(0))
  const greenValue = useRef(new Animated.Value(0))
  const redValue = useRef(new Animated.Value(0))

  const blueAnimation = {
    height: blueValue.current.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 357],
    }),
  }

  const greenAnimation = {
    left: greenValue.current.interpolate({
      inputRange: [0, 1],
      outputRange: [550, 352],
    }),
    top: greenValue.current.interpolate({
      inputRange: [0, 1],
      outputRange: [-310, -250],
    }),
  }

  const redAnimation = {
    left: redValue.current.interpolate({
      inputRange: [0, 1],
      outputRange: [550, 305],
    }),
    top: redValue.current.interpolate({
      inputRange: [0, 1],
      outputRange: [10, -435],
    }),
  }

  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(blueValue.current, {
          toValue: 1,
          duration: 400,
          useNativeDriver: false,
        }),
        Animated.timing(greenValue.current, {
          toValue: 1,
          duration: 400,
          delay: 200,
          useNativeDriver: false,
        }),
        Animated.timing(redValue.current, {
          toValue: 1,
          duration: 400,
          delay: 400,
          useNativeDriver: false,
        }),
      ]).start()
    }, 1200)
  }, [])

  return (
    <View style={styles.backgroundStyle}>
      <Animated.View style={[styles.blue, blueAnimation]} />
      <Animated.View style={[styles.green, greenAnimation]} />
      <Animated.View style={[styles.red, redAnimation]} />
    </View>
  )
}

const widthBlue = 100
const radiusBlue = widthBlue / 2

const widthGreen = 90
const radiusGreen = widthGreen / 2

const widthRed = 80
const radiusRed = widthRed / 2

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  blue: {
    left: 148,
    top: 0,
    width: widthBlue,
    backgroundColor: '#277bf8b0',
    borderBottomLeftRadius: radiusBlue,
    borderBottomRightRadius: radiusBlue,
  },
  green: {
    width: widthGreen,
    height: 400,
    transform: [
      {
        rotateZ: `${1 * 72}deg`,
      },
    ],
    backgroundColor: '#20ac50b0',
    borderBottomLeftRadius: radiusGreen,
    borderBottomRightRadius: radiusGreen,
  },
  red: {
    width: widthRed,
    height: 500,
    transform: [
      {
        rotateZ: `${2 * 72}deg`,
      }
    ],
    backgroundColor: '#e43250b0',
    borderBottomLeftRadius: radiusRed,
    borderBottomRightRadius: radiusRed,
  },
})


