// By Jim Moy, for Scholly interview, Apr 2021
import React, {
  Fragment,
  useCallback,
  useEffect,
  useState,
} from 'react'
import {LayoutAnimation, StatusBar} from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import {Segue} from './Segue'
import {AppNavigation} from './AppNavigation'

export const App = () => {
  const [segueFinished, setSegueFinished] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      // Splash was shown in native code
      SplashScreen.hide()
    }, 500)
  }, [])

  const finishSegue = useCallback(() => {
    setTimeout(() => {
      setSegueFinished(true)
      LayoutAnimation.easeInEaseOut()
    }, 500)
  }, [])

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      {segueFinished ? (
        <AppNavigation />
      ) : (
        <Segue finished={finishSegue} />
      )}
    </Fragment>
  )
}
