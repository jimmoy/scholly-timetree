// By Jim Moy, for Scholly interview, Apr 2021
import {useState} from 'react'
import {useFormik} from 'formik'
import {isEmpty} from 'ramda'

import {validate} from './validate'

export const useFormHook = onLogin => {
  const [errors, setErrors] = useState({})

  const {handleChange, handleBlur, handleSubmit, values} = useFormik({
    initialValues: {
      name: '',
      birthday: '',
    },
    onSubmit: data => {
      setErrors({})
      const result = validate(data)
      if (!isEmpty(result)) {
        setErrors(result)
      } else {
        onLogin()
      }
    },
  })

  return {handleChange, handleBlur, handleSubmit, values, errors}
}
