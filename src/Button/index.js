import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

import {primaryColor} from 'src/colors'

// Label overrides children

export const Button = ({
  label,
  children,
  style,
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
      style={[styles.container, colors.container, style]}
      onPress={onPress}
    >
      <View>
        {label ? (
          <Text style={[styles.text, colors.text]}>{label}</Text>
        ) : (
          children
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = {
  container: {
    alignItems: 'center',
    borderColor: primaryColor,
    borderRadius: 8,
    borderWidth: 1,
    height: 48,
    justifyContent: 'center',
    width: '75%',
  },
  text: {
    fontWeight: '800',
  },
}

