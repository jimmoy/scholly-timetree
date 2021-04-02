import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {Intro} from 'src/Intro'
import {Login} from 'src/Login'

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
    </Stack.Navigator>
  </NavigationContainer>
)
