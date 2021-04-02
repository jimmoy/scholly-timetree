import {mergeRight} from 'ramda'

export const validate = data => {
  let accum = {}

  if (!data.name) {
    accum = mergeRight(accum, {name: 'required'})
  }

  return accum
}

