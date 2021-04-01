import React, {Fragment, useEffect} from 'react'
import type {Node} from 'react'
import SplashScreen from 'react-native-splash-screen'

import {StatusBar} from 'react-native'

import {Segue} from './Segue'

export const App: () => Node = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1000)
  }, [])

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <Segue />
    </Fragment>
  )
}
