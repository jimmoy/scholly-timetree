import React, {useEffect, useRef, useState} from 'react'
import {
  Animated,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'

const diagonalAnimation = (valueRef, leftOutput, topOutput) => ({
  left: valueRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: leftOutput,
  }),
  top: valueRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: topOutput,
  }),
});

export const Segue: () => Node = () => {
  const blueValue = useRef(new Animated.Value(0))
  const greenValue = useRef(new Animated.Value(0))
  const redValue = useRef(new Animated.Value(0))
  const yellowValue = useRef(new Animated.Value(0))
  const purpleValue = useRef(new Animated.Value(0))

  const blueAnimation = {
    height: blueValue.current.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 357],
    }),
  }

  const greenAnimation = diagonalAnimation(
    greenValue, [550, 348], [-310, -256])

  const redAnimation = diagonalAnimation(
    redValue, [550, 305], [10, -438])

  const yellowAnimation = diagonalAnimation(
    yellowValue, [-300, 0], [-600, -940])

  const purpleAnimation = diagonalAnimation(
    purpleValue, [-250, -48], [-1700, -1660])

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
        Animated.timing(yellowValue.current, {
          toValue: 1,
          duration: 400,
          delay: 600,
          useNativeDriver: false,
        }),
        Animated.timing(purpleValue.current, {
          toValue: 1,
          duration: 400,
          delay: 900,
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
      <Animated.View style={[styles.yellow, yellowAnimation]} />
      <Animated.View style={[styles.purple, purpleAnimation]} />
    </View>
  )
}

const widthBlue = 100
const radiusBlue = widthBlue / 2

const widthGreen = 90
const radiusGreen = widthGreen / 2

const widthRed = 80
const radiusRed = widthRed / 2

const widthYellow = 90
const radiusYellow = widthYellow / 2

const widthPurple = 100
const radiusPurple = widthPurple / 2

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
      },
    ],
    backgroundColor: '#e43250b0',
    borderBottomLeftRadius: radiusRed,
    borderBottomRightRadius: radiusRed,
  },
  yellow: {
    width: widthYellow,
    height: 500,
    transform: [
      {
        rotateZ: `${3 * 72}deg`,
      },
    ],
    backgroundColor: '#f5d800c0',
    borderBottomLeftRadius: radiusYellow,
    borderBottomRightRadius: radiusYellow,
  },
  purple: {
    width: widthPurple,
    height: 400,
    transform: [
      {
        rotateZ: `${4 * 72}deg`,
      },
    ],
    backgroundColor: '#7732e0b0',
    borderBottomRightRadius: radiusPurple,
    borderBottomLeftRadius: radiusPurple,
  },
})
