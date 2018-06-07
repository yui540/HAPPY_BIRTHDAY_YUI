import * as util from './lib/util'
import preload_data from './config/preload'

// preload
util.preload(preload_data, () => {
  console.log('fin.')
}, data => {})
