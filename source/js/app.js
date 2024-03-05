let headerWrapper = document.querySelector('.header__wrapper');
let headerToggle = document.querySelector('.header__toggle');
let navList = document.querySelector('.navigation__list');
let navMain = document.querySelector('.navigation');
let contacts = document.querySelector('.contacts')

headerWrapper.classList.remove('header__wrapper--nojs');
navMain.classList.remove('navigation--nojs');
contacts.classList.remove('contacts--nojs');

headerToggle.addEventListener('click', function () {
  if (headerToggle.classList.contains('header__toggle--closed') && navList.classList.contains('navigation__list--closed')) {
    headerToggle.classList.remove('header__toggle--closed');
    navList.classList.remove('navigation__list--closed');
    headerToggle.classList.add('header__toggle--opened');
    navList.classList.add('navigation__list--opened');
  } else {
    headerToggle.classList.add('header__toggle--closed');
    navList.classList.add('navigation__list--closed');
    headerToggle.classList.remove('header__toggle--opened');
    navList.classList.remove('navigation__list--opened');
  }
})
