// By Jim Moy, for Scholly interview, Apr 2021
import React, {useEffect, useRef, useState} from 'react'
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {keys, isEmpty} from 'ramda'

import {Button} from 'src/Button'
import {SpaceV} from 'src/Space'
import {useFormHook} from './hooks'
import {styles} from './styles'

const errMap = {
  name: 'The name is invalid',
  birthday: 'The birth date is incorrect',
}

export const Profile = ({navigation}) => {
  const confirm = useRef(() => {
    navigation.pop()
  })

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
  } = useFormHook(confirm.current)

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
    <KeyboardAwareScrollView contentContainerStyle={styles.scroll}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => alert('camera')}
      >
        <Image
          style={styles.image}
          source={require('src/assets/user-circle.png')}
        />
        <Text style={styles.addPhoto}>Add photo</Text>
      </TouchableOpacity>
      <SpaceV n={5} />

      <View style={styles.errorContainer}>
        {!isEmpty(errMsg) && (
          <Text style={styles.errMsg}>{errMsg}</Text>
        )}
      </View>

      <View style={styles.fields}>
        <TextInput
          style={styles.input}
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          placeholder="Name"
          value={values.email}
        />
        <SpaceV n={1} />

        <TextInput
          style={styles.input}
          onChangeText={handleChange('birthday')}
          onBlur={handleBlur('birthday')}
          placeholder="Birthday"
          value={values.password}
        />
        <SpaceV n={1} />
      </View>
      <SpaceV n={4} />

      <Button
        label="Confirm"
        onPress={handleSubmit}
        title="Confirm"
        textStyle={{fontSize: 16}}
      />
      <SpaceV n={12} />
    </KeyboardAwareScrollView>
  )
}
