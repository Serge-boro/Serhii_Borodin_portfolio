const navbar = document.querySelector('#nav'),
  navBtn = document.querySelector('#nav-btn'),
  closeBtn = document.querySelector('#close-btn'),
  sidebar = document.querySelector('#sidebar'),
  dateTime = document.querySelector('#date')
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 80) {
    navbar.classList.add('navbar-fixed')
  } else {
    navbar.classList.remove('navbar-fixed')
  }
})
// show sidebar
navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar')
})
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar')
})
// set year
dateTime.innerHTML = new Date().getFullYear()

// audio
let audio = new Audio()
audio.src = './videos/preview.mp3'

function showModalByScroll() {
  if (
    window.pageYOffset + document.documentElement.clientHeight >=
    document.documentElement.scrollHeight - 3500
  ) {
    audio.play()
  }

  if (window.pageYOffset > 4200 || window.pageYOffset < 1399) {
    audio.volume = '0.1'
  } else if (window.pageYOffset > 4000 || window.pageYOffset < 1599) {
    audio.volume = '0.2'
  } else if (window.pageYOffset > 3700 || window.pageYOffset < 1799) {
    audio.volume = '0.3'
  } else if (window.pageYOffset > 3500 || window.pageYOffset < 1999) {
    audio.volume = '0.4'
  } else if (window.pageYOffset > 2000) {
    audio.volume = '0.5'
  }
}
window.addEventListener('scroll', showModalByScroll)

// boxes
const boxes = document.querySelectorAll('.blog')

window.addEventListener('scroll', checkBoxes)
checkBoxes()
function checkBoxes() {
  const triggerBotton = (window.innerHeight / 5) * 4
  boxes.forEach((item) => {
    const boxTop = item.getBoundingClientRect().top
    if (boxTop < triggerBotton) {
      item.classList.add('show')
    } else {
      item.classList.remove('show')
    }
  })
}

// timer

const deadline = document.querySelector('.deadline'),
  items = document.querySelectorAll('.deadline-format h4')

let futureDate = new Date(2021, 12, 31, 12, 00, 00)

const futureTime = futureDate.getTime()

function getRemainingTime() {
  const today = new Date().getTime()

  const t = futureTime - today

  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinutes = 60 * 1000

  let days = Math.floor(t / oneDay)
  let hours = Math.floor((t % oneDay) / oneHour)
  let minutes = Math.floor((t % oneHour) / oneMinutes)
  let seconds = Math.floor((t % oneMinutes) / 1000)

  const value = [days, hours, minutes, seconds]

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`)
    }
    return item
  }
  items.forEach((item, idx) => {
    item.innerHTML = format(value[idx])
  })
  if (t < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">if you can read this that's mean time is gone </h4>`
  }
}
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()

// headerLine
const headerLine = document.querySelector('.headerLine')
function scroll() {
  let windowHeight = document.body.getBoundingClientRect().height
  let heightHeader = window.pageYOffset
  let widthHeaderLine = (heightHeader / windowHeight) * 22.5
  headerLine.style.width = `${widthHeaderLine}` * 100 + 'px'
}
window.addEventListener('scroll', scroll)
