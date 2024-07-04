var modal = document.querySelector('.modal');
var termsCta = document.querySelector('.terms-cta');
var modalExitBtn = document.querySelector('.modal-exit-btn');

termsCta.addEventListener('click', function () {
  modal.classList.add('show');
});

modalExitBtn.addEventListener('click', function () {
  modal.classList.remove('show');
});

// var scrollTopBtn = document.querySelector('.scroll-to-top-btn');

// window.onscroll = function () {
//   scrollTopBtn.classList.toggle('scroll-active', window.scrollY >= 600);
// };
// scrollTopBtn.onclick = function () {
//   window.scrollTo({ behavior: 'smooth', top: 0 });
// };
