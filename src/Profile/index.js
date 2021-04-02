// By Jim Moy, for Scholly interview, Apr 2021
import React, {useEffect, useState} from 'react'
import {Image, Text, TextInput, View} from 'react-native'
import {keys, isEmpty} from 'ramda'

import {Button} from 'src/Button'
import {SpaceV} from 'src/Space'
import {useFormHook} from './hooks'
import {styles} from './styles'

const errMap = {
  email: 'The email address is invalid',
  password: 'The password is incorrect',
}

export const Profile = ({navigation}) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
  } = useFormHook()

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
        />
        <SpaceV n={1} />

        <TextInput
          style={styles.input}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          placeholder="The password is &ldquo;Password&rdquo;"
          value={values.password}
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
  )
}
