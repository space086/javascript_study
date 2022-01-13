const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')
// 검색창 요소를 클릭하면 실행
searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})


searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})

const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    gsap.to(toTopEl, .2, {
      x: 0
    })

  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300))
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})