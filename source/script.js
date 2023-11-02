let navList = document.querySelector('.navigation__list');
let navToggle = document.querySelector('.navigation__toggle');
let navMain = document.querySelector('.navigation');

navToggle.classList.remove('navigation__toggle--nojs');
navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('navigation__toggle--closed') && navList.classList.contains('navigation__list--closed')) {
    navToggle.classList.remove('navigation__toggle--closed');
    navList.classList.remove('navigation__list--closed');
    navToggle.classList.add('navigation__toggle--opened');
    navList.classList.add('navigation__list--opened');
  } else {
    navToggle.classList.add('navigation__toggle--closed');
    navList.classList.add('navigation__list--closed');
    navToggle.classList.remove('navigation__toggle--opened');
    navList.classList.remove('navigation__list--opened');
  }
})
