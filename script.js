// ================================================
//   FILTRO DE PILARES
// ================================================
const botoesFiltro = document.querySelectorAll('.filtro');
const cards = document.querySelectorAll('.card-pilar');

botoesFiltro.forEach(function (btn) {
  btn.addEventListener('click', function () {
    botoesFiltro.forEach(function (b) { b.classList.remove('ativo'); });
    btn.classList.add('ativo');

    var filtro = btn.dataset.filtro;

    cards.forEach(function (card) {
      if (filtro === 'todos' || card.dataset.pilar === filtro) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ================================================
//   CARROSSEL DO HERO
// ================================================
var track = document.querySelector('.carousel-track');
var carouselCards = document.querySelectorAll('.carousel-card');
var btnNext = document.querySelector('.carousel-next');
var btnPrev = document.querySelector('.carousel-prev');

if (track && carouselCards.length > 0 && btnNext && btnPrev) {
  var currentIndex = 0;
  var total = carouselCards.length;

  function goTo(index) {
    track.style.transform = 'translateX(-' + (index * 100) + '%)';
  }

  btnNext.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % total;
    goTo(currentIndex);
  });

  btnPrev.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + total) % total;
    goTo(currentIndex);
  });
}
