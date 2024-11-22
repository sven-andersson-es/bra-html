/* Desktop navigation */

let buttons = document.querySelectorAll('.top-nav__button');

buttons.forEach(el => {
  el.addEventListener('click', () => {
    el.classList.add('top-nav__button--open');
  });
});

// close the popup when clicking outside
document.addEventListener('click', (event) => {
  const path = event.composedPath();
  buttons.forEach(el => {
    if (!path.includes(el)) {
      el.classList.remove('top-nav__button--open');
    }
  });
});


/* Mobile navigation */
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.top-nav-mobile');

hamburger.addEventListener('click', () => {
  if (!mobileMenu.classList.contains('top-nav-mobile--open')) {
    openMobileMenu();
  }
});

function openMobileMenu() {
  mobileMenu.classList.add('top-nav-mobile--open');
  hamburger.classList.add('hamburger--open');
  document.documentElement.style.overflowY = 'hidden';

  // close mobile menu when clicking outside
  setTimeout(() => {
    document.addEventListener('click', onMobileMenuCilckOutside);
  }, 100);
}
function closeMobileMenu() {
  mobileMenu.classList.remove('top-nav-mobile--open');
  hamburger.classList.remove('hamburger--open');
  document.documentElement.style.overflowY = 'auto';

  document.removeEventListener('click', onMobileMenuCilckOutside);
}
function onMobileMenuCilckOutside(event) {
  if (!event.composedPath().includes(mobileMenu)) {
    closeMobileMenu();
  }
}
function openSlideIn(id) {
  document.getElementById(id).classList.add('top-nav-mobile__slidein--open');
}
function closeSlideIn(id) {
  document.getElementById(id).classList.remove('top-nav-mobile__slidein--open');
}


