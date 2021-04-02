// By Jim Moy, for Scholly interview, Apr 2021
import {useState} from 'react'
import {useFormik} from 'formik'
import {isEmpty} from 'ramda'

import {validate} from './validate'

export const useFormHook = () => {
  const [errors, setErrors] = useState({})

  const {handleChange, handleBlur, handleSubmit, values} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: data => {
      setErrors({})
      const result = validate(data)
      if (!isEmpty(result)) {
        setErrors(result)
      }
    },
  })

  return {handleChange, handleBlur, handleSubmit, values, errors}
}
