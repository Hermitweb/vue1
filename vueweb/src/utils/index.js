// 工具函数集合

/**
 * 节流函数 - 性能优化
 * @param {Function} fn - 需要节流的函数
 * @param {Number} wait - 等待时间 (ms)
 */
export function throttle(fn, wait = 100) {
  let timer = null
  let last = 0
  return function (...args) {
    const now = Date.now()
    if (now - last >= wait) {
      last = now
      fn.apply(this, args)
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        fn.apply(this, args)
      }, wait - (now - last))
    }
  }
}

/**
 * 防抖函数
 */
export function debounce(fn, wait = 200) {
  let timer = null
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), wait)
  }
}

/**
 * 图片预加载
 * @param {String|Array} src - 图片 URL 或 URL 数组
 */
export function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = resolve
    img.onerror = reject
    img.src = src
  })
}

export function preloadImages(srcList) {
  return Promise.all(srcList.map(preloadImage))
}
