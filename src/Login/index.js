// By Jim Moy, for Scholly interview, Apr 2021
import React, {useEffect, useRef, useState} from 'react'
import {Image, Text, TextInput, View} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {keys, isEmpty} from 'ramda'

import {Button} from 'src/Button'
import {SpaceV} from 'src/Space'
import {useFormHook} from './hooks'
import {styles} from './styles'

const errMap = {
  email: 'The email address is invalid',
  password: 'The password is incorrect',
}

export const Login = ({navigation}) => {
  const loginSuccess = useRef(() => {
    navigation.replace('Home')
  })

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
  } = useFormHook(loginSuccess.current)

  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    const msg = keys(errors).reduce(
      (acc, key) =>
        isEmpty(errors[key]) ? acc : acc.concat(' ', errMap[key]),
      ''
    )
    setErrMsg(msg.trim())
  }, [errors])

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('src/assets/splash-logo.png')}
        />
        <SpaceV n={5} />

        <View style={styles.errorContainer}>
          {!isEmpty(errMsg) && (
            <Text style={styles.errMsg}>{errMsg}</Text>
          )}
        </View>

        <View style={styles.fields}>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            placeholder="Email Address"
            value={values.email}
            autoCapitalize="none"
          />
          <SpaceV n={1} />

          <TextInput
            style={styles.input}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            placeholder="The password is &ldquo;Password&rdquo;"
            value={values.password}
            autoCapitalize="none"
            secureTextEntry={true}
          />
          <SpaceV n={1} />
        </View>
        <SpaceV n={4} />

        <Button
          label="Submit"
          onPress={handleSubmit}
          title="Submit"
          textStyle={{fontSize: 16}}
        />
        <SpaceV n={12} />
      </View>
    </KeyboardAwareScrollView>
  )
}
