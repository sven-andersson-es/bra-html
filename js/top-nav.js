const buttons = document.querySelectorAll('.top-nav__button');

buttons.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.add('top-nav__button--open');
  });
});

// close the popup when clicking outside
document.addEventListener('click', (event) => {
  const path = event.composedPath();
  buttons.forEach((item) => {
    if (!path.includes(item)) {
      item.classList.remove('top-nav__button--open');
    }
  });
})