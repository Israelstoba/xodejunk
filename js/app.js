var modal = document.querySelector('.modal');
var termsCta = document.querySelector('.terms-cta');
var modalExitBtn = document.querySelector('.modal-exit-btn');
const body = document.body;

termsCta.addEventListener('click', function () {
  modal.classList.add('show');
  body.classList.add('no-scroll');
});

modalExitBtn.addEventListener('click', function () {
  modal.classList.remove('show');
  body.classList.remove('no-scroll');
});

// var scrollTopBtn = document.querySelector('.scroll-to-top-btn');

// window.onscroll = function () {
//   scrollTopBtn.classList.toggle('scroll-active', window.scrollY >= 600);
// };
// scrollTopBtn.onclick = function () {
//   window.scrollTo({ behavior: 'smooth', top: 0 });
// };
