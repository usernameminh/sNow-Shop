import {TYPE_LOG} from '../constants.js'

function logger(value, type = TYPE_LOG) {
  console[type](value)
}

export default logger