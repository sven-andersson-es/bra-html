/* Desktop navigation */

let buttons = document.querySelectorAll('.top-nav__button');

buttons.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('top-nav__button--open');
  });
});

// close the popup when clicking outside
document.addEventListener('click', (event) => {
  const path = event.composedPath();
  buttons.forEach(item => {
    if (!path.includes(item)) {
      item.classList.remove('top-nav__button--open');
    }
  });
});


/* Mobile navigation */

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger--open');
  document.querySelector('.top-nav-mobile').classList.toggle('top-nav-mobile--open');
});

function openSlideIn(id) {
  document.getElementById(id).classList.add('top-nav-mobile__slidein--open');
}
function closeSlideIn(id) {
  document.getElementById(id).classList.remove('top-nav-mobile__slidein--open');
}