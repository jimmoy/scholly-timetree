import {StyleSheet} from 'react-native'

// Widths taken from the mock with PixelStick

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

// Some of these are initial states, animation
// will muck with them.

export const styles = StyleSheet.create({
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
