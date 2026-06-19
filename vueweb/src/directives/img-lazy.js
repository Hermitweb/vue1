/**
 * 图片懒加载指令 v-img-lazy
 * 进入视口才设置 src，减少首屏请求
 */
let observer = null

function createObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          const src = el.dataset.src
          if (src) {
            el.src = src
            el.removeAttribute('data-src')
          }
          observer.unobserve(el)
        }
      })
    },
    {
      rootMargin: '200px 0px',
      threshold: 0.01
    }
  )
  return observer
}

export default {
  inserted(el, binding) {
    const src = binding.value || el.src
    if (!src) return
    el.dataset.src = src
    // 占位图（1x1 透明 SVG），避免布局抖动
    el.src =
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiPjwvc3ZnPg=='
    createObserver().observe(el)
  },
  unbind(el) {
    if (observer) observer.unobserve(el)
  }
}
