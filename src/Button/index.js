// By Jim Moy, for Scholly interview, Apr 2021
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

import {primaryColor} from 'src/colors'
import {styles} from './styles'

// Label overrides children

export const Button = ({
  label,
  children,
  buttonStyle,
  textStyle,
  invert = false,
  onPress,
}) => {
  const colors = {
    container: {
      backgroundColor: invert ? '#fff' : primaryColor,
    },
    text: {
      color: invert ? primaryColor : '#ffffff',
    },
  }
  return (
    <TouchableOpacity
      style={[styles.container, colors.container, buttonStyle]}
      onPress={onPress}
    >
      <View>
        {label ? (
          <Text style={[styles.text, colors.text, textStyle]}>
            {label}
          </Text>
        ) : (
          children
        )}
      </View>
    </TouchableOpacity>
  )
}
