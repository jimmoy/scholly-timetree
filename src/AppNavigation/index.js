// By Jim Moy, for Scholly interview, Apr 2021
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {Home} from 'src/Home'
import {Intro} from 'src/Intro'
import {Login} from 'src/Login'
import {Profile} from 'src/Profile'

const Stack = createStackNavigator()

export const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Edit Profile" component={Profile} />
    </Stack.Navigator>
  </NavigationContainer>
)
