const CACHE_NAME = 'yui.magical-girl.site_version1.0.0'
const urlsToCache = [
  "/",
  "/stylesheets/font.css",
  "/stylesheets/style.css",
  "/scripts/app.min.js",
  "https://use.fontawesome.com/releases/v5.0.10/css/all.css",
  "./images/load-view/bg.svg",
  "./images/load-view/char-name.svg",
  "./images/load-view/content-name.svg",
  "./images/load-view/load-icon.png",
  "./images/load-view/words/1.svg",
  "./images/load-view/words/2.svg",
  "./images/load-view/words/3.svg",
  "./images/load-view/words/4.svg",
  "./images/load-view/words/5.svg",
  "./images/motion-part1/bg.svg",
  "./images/motion-part1/name.svg",
  "./images/motion-part1/say.svg",
  "./images/motion-part1/yui.svg",
  "./images/motion-part1/happy-birthday/1.svg",
  "./images/motion-part1/happy-birthday/2.svg",
  "./images/motion-part2/bg-dot.svg",
  "./images/motion-part2/bg-dot2.svg",
  "./images/motion-part2/bg-label.svg",
  "./images/motion-part2/bg-star.svg",
  "./images/motion-part2/bg-text.svg",
  "./images/motion-part2/say/1.svg",
  "./images/motion-part2/say/2.svg",
  "./images/motion-part2/silhouette/1.svg",
  "./images/motion-part2/silhouette/2.svg",
  "./images/developer-page/bg-yui.svg",
  "./images/developer-page/label/1.svg",
  "./images/developer-page/label/2.svg",
  "./images/gallery-page/1.png",
  "./images/gallery-page/2.png",
  "./images/gallery-page/3.png",
  "./images/gallery-page/4.png",
  "./images/gallery-page/bg-yui.svg",
  "./images/gallery-page/title.svg",
  "./images/top-page/bg-dot.svg",
  "./images/top-page/bg-dog.svg",
  "./images/top-page/happy-birthday.png",
  "./images/top-page/nav/1.png",
  "./images/top-page/nav/2.png",
  "./images/top-page/nav/3.png",
  "./images/top-page/yui.svg",
]

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('activate', e => {})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if(res) return res
        return fetch(e.request)
      })
  )
})
