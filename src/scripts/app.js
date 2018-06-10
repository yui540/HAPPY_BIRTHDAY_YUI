import * as util from './lib/util'
import preload_data from './config/preload'

// preload
util.preload(preload_data, () => {
  console.log('fin.')
}, data => {})

const load_view__end = document.querySelector('.load-view__end div:nth-child(6)')
load_view__end.addEventListener('animationend', () => {
  util.finLoadView()
})
