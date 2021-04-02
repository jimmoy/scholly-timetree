// By Jim Moy, for Scholly interview, Apr 2021
import React from 'react'
import {Text, View} from 'react-native'

import {Button} from 'src/Button'
import {SpaceV} from 'src/Space'
import {styles} from './styles'

export const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen!</Text>
      <SpaceV n={4} />

      <Button
        label="Edit Profile"
        onPress={() => navigation.navigate('Edit Profile')}
      />
      <SpaceV n={2} />

      <Button
        label="Logout"
        invert
        onPress={() => navigation.popToTop('Intro')}
      />
    </View>
  )
}
