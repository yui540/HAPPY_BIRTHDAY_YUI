import * as util from './lib/util'
import preload_data from './config/preload'

console.log('#########################################################')
console.log('「やっはろー！」')
console.log('「『でべろっぱーつーる？』っていう開くのはいいけど、」')
console.log('「悪いことしたらダメだよ！！！」')
console.log('#########################################################')

// event
util.bindPageLink()
util.bindCloseBtn()

// preload
util.preload(preload_data, () => {}, data => {})

const load_view__end = document.querySelector('.load-view__end div:nth-child(6)')
load_view__end.addEventListener('animationend', () => {
  util.finLoadView()
})
