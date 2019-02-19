const button = document.querySelector('.btn');
const bubble = document.querySelector('.bubble');
const para = document.querySelector('.scroller');

button.addEventListener('mouseenter', () => {
  button.classList.add('btn-mouseenter');
});
button.addEventListener('mouseleave', () => {
  button.classList.remove('btn-mouseenter');
});
button.addEventListener('click', () => {
  if (button.classList.contains('btn-click')) {
    bubble.classList.remove('shrink');
    button.classList.remove('btn-click');
  } else {
    bubble.classList.add('shrink');
    button.classList.add('btn-click');
  }
});
