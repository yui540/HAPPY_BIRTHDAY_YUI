const root         = document.getElementById('root')
const load_view    = document.querySelector('.load-view')
const motion_part1 = document.querySelector('.motion-part1')
const motion_part2 = document.querySelector('.motion-part2')
const top_page     = document.querySelector('.top-page')

/**
 * 画像のプリロード
 * @param images   : 画像パスの配列
 * @param fn       : コールバック関数
 * @param progress : 読み込み状況取得用コールバック関数
 */
export const preload = (images, fn, progress) => {
  const len  = images.length
  let load = 0

  images.forEach((image, key) => {
    const img = new Image()
    img.src = image
    img.onload = () => {
      load += 1
      progress({
        size : len,
        load : load,
        per  : load / len
      })

      if(load >= len) fn()
    }
  })
}

/**
 * スマートフォンかどうかの真偽
 * @return bool
 */
export const isSP = () => {
  const useragent = navigator.userAgent.toLowerCase()
  const reg = /(iphone|ipad|ipod|android|mobile)/

  return reg.test(useragent)
}

/**
 * PCかどうかの真偽
 * return bool
 */
export const isPC = () => {
  return !isSP()
}

/**
 * load-viewの終了
 */
export const finLoadView = () => {
  root.removeChild(load_view)
  motion_part1.setAttribute('data-state', 'start')

  document.querySelector('.motion-part1__end .color-bg')
    .addEventListener('animationend', () => {
    finMotionPart1()
  })
}

/**
 * motion-part1の終了
 */
export const finMotionPart1 = () => {
  root.removeChild(motion_part1)
  motion_part2.setAttribute('data-state', 'start')

  document.querySelector('.motion-part2__end div:nth-child(3)')
    .addEventListener('animationend', () => {
    finMotionPart2()  
  })
}

/**
 * motion-part2の終了
 */
export const finMotionPart2 = () => {
  root.removeChild(motion_part2)
  top_page.setAttribute('data-state', 'start')
}

/**
 * ページリンクのイベント監視
 */
export const bindPageLink = () => {
  const other_page     = document.querySelector('.other-page')
  const developer_page = document.querySelector('.developer-page')
  const gallery_page   = document.querySelector('.gallery-page')
  const links          = document.querySelectorAll('.page-link')

  /* click ----------------------------------------------------------------- */
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault()

      if(this.title === 'サイト制作者')
        developer_page.style.display = 'block'
      else
        gallery_page.style.display = 'block'

      other_page.setAttribute('data-state', 'open')
    })
  })
}
