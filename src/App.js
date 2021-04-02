import React, {Fragment, useEffect, useState} from 'react'
import type {Node} from 'react'
import {StatusBar} from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import {Segue} from './Segue'
import {AppNavigation} from './AppNavigation'

export const App: () => Node = () => {
  const [segueFinished, setSegueFinished] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      // Splash was shown in native code
      SplashScreen.hide()
    }, 1000)
  }, [])

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      {segueFinished ? (
        <AppNavigation />
      ) : (
        <Segue finished={() => setSegueFinished(true)} />
      )}
    </Fragment>
  )
}
