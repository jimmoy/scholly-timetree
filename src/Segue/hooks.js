import {useEffect, useRef} from 'react'
import {Animated} from 'react-native'

const diagonalAnimation = (valueRef, leftOutput, topOutput) => ({
  left: valueRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: leftOutput,
  }),
  top: valueRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: topOutput,
  }),
})

export const useSegueAnimation = callback => {
  const blueValue = useRef(new Animated.Value(0))
  const greenValue = useRef(new Animated.Value(0))
  const redValue = useRef(new Animated.Value(0))
  const yellowValue = useRef(new Animated.Value(0))
  const purpleValue = useRef(new Animated.Value(0))

  const segueFinished = useRef(callback)

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
      ]).start(({finished}) => {
        if (finished && segueFinished.current) {
          segueFinished.current()
        }
      })
    }, 1200)
  }, [])

  return {
    blueAnimation: {
      height: blueValue.current.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 357],
      }),
    },

    greenAnimation: diagonalAnimation(
      greenValue,
      [550, 348],
      [-310, -256]
    ),

    redAnimation: diagonalAnimation(redValue, [550, 305], [10, -438]),

    yellowAnimation: diagonalAnimation(
      yellowValue,
      [-300, 0],
      [-600, -940]
    ),

    purpleAnimation: diagonalAnimation(
      purpleValue,
      [-250, -48],
      [-1700, -1660]
    ),
  }
}
