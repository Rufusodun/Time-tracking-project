const menu = [
  {
    img: './images/icon-work.svg',
    bgcolor: 'hsl(15, 100%, 70%)',
    title: 'Work',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    bgcolor: 'hsl(195, 74%, 62%)',
    img: './images/icon-play.svg',
    title: 'Play',
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    bgcolor: 'hsl(348, 100%, 68%)',
    img: './images/icon-study.svg',
    title: 'Study',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    bgcolor: 'hsl(145, 58%, 55%)',
    img: './images/icon-exercise.svg',
    title: 'Exercise',
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    bgcolor: 'hsl(264, 64%, 52%)',
    img: './images/icon-social.svg',
    title: 'Social',
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    bgcolor: 'hsl(43, 84%, 65%)',
    img: './images/icon-self-care.svg',
    title: 'Self Care',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
]

const section = document.querySelector('.sub-control')
const btnContainer = document.querySelector('.btn-container')

window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu)
  displayButton()
})

function displayMenuItems(menuItems) {
  let displayMenu = menuItems
    .map(function (item) {
      return `

      <div class="parent">
    <div class="time-container" style="background-color: ${item.bgcolor}">
    <img class="work-img" src=${item.img} alt="">
   </div>
   <div class="dashboard">
  <div class="w">
   <p class="work">${item.title}</p>
   <i style="color: white; padding-top: 0.15rem;" class="fa-solid fa-ellipsis"></i>
  </div>
  <h2 class="current">${item.timeframes.weekly.current}hrs</h2>
 <p class="previous">Last Week - ${item.timeframes.weekly.previous}hrs</p>
   </div>
   </div>
 
 `
    })
    .join('')
  section.innerHTML = displayMenu
}

function displayButton() {
  const period = ['daily', 'weekly', 'monthly']

  const categoryBtns = period
    .map(function (timeframes) {
      return `
   <button type="button" class="filter-btn" data-id=${timeframes}>${timeframes}</button>
    <br>
  `
    })
    .join('')
  btnContainer.innerHTML = categoryBtns
  // console.log(categoryBtns);

  const filterBtns = document.querySelectorAll('.filter-btn')
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id

      let displayMenu = menu
        .map(function (item) {
          return `
      <div class="parent">
    <div class="time-container" style="background-color: ${item.bgcolor}">
    <img class="work-img" src=${item.img} alt="">
   </div>
   <div class="dashboard">
  <div class="w">
   <p class="work">${item.title}</p>
   <i style="color: white; padding-top: 0.15rem;" class="fa-solid fa-ellipsis"></i>
  </div>
  <h2 class="current">${item.timeframes[category].current}hrs</h2>
 <p class="previous">Last Week - ${item.timeframes[category].previous}hrs</p>
   </div>
   </div>
 
 `
        })
        .join('')
      section.innerHTML = displayMenu
    })
  })
}
