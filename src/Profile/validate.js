import {mergeRight} from 'ramda'

const emailPat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

export const validate = data => {
  let accum = {}

  if (!data.email) {
    accum = mergeRight(accum, {email: 'required'})
  } else if (!emailPat.test(data.email)) {
    accum = mergeRight(accum, {email: 'invalid'})
  }

  if (!data.password) {
    accum = mergeRight(accum, {password: 'required'})
  } else if (data.password !== 'Password') { // heh, demo only
    accum = mergeRight(accum, {password: 'incorrect'})
  }

  return accum
}
