const arrowIcon = document.querySelectorAll('.container i');
const arrowIcon2 = document.querySelectorAll('.figure-3 i')
const carrossel = document.querySelector('.carrosel-1');
const Imgs = document.querySelectorAll('.carrosel-1 img');
const boxOftext = document.querySelectorAll('.carrosel-2 .box-of-text')
const lista = document.querySelectorAll('.lista > li');
const listaLoja = document.querySelectorAll('.drop3 > li');
const fechar = document.querySelector('.big-page p')
const abrir = document.querySelector('.burger-menu')

window.addEventListener('scroll', function () {
  var buttonScrool = document.querySelector('.buttonScrool')

  if (window.scrollY > 300) {
    buttonScrool.style.display = 'block'
  }
  else {
    buttonScrool.style.display = 'none'
  }
})
document.querySelector('.buttonScrool').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

abrir.addEventListener('click', function() {
  document.querySelector('.big-page').style.transform = 'translateX(0)'
})

fechar.addEventListener('click', function() {
  document.querySelector('.big-page').style.transform = 'translateX(100%)'
})

lista.forEach(function(item) {
  item.addEventListener('click', function(event) {
    if (event.target === this) {
      const ul = this.querySelector('ul');

      if (ul.style.display === 'block') {
        ul.style.display = 'none';
      } else {
        ul.style.display = 'block';
      }
    }
  });
});

listaLoja.forEach(function(item) {
  item.addEventListener('click', function(event) {
    const isUlLojaClicked = event.target.classList.contains('ulLoja');
    
    if (isUlLojaClicked) {
      const ulLoja = this.querySelector('ul');
      
      if (ulLoja.style.display === 'block') {
        ulLoja.style.display = 'none';
      } else {
        ulLoja.style.display = 'block';
      }
    }
  });
});

const carouselItemsImg = document.querySelectorAll('.Imgs');
const nextButton = document.querySelector('.right');
const prevButton = document.querySelector('.left');
const carouselItemsText = document.querySelectorAll('.box-of-text');
const nextButton2 = document.querySelector('.right-2');
const prevButton2 = document.querySelector('.left-2');

let currentIndex = 0;
let currentIndex2 = 0;

function showItem(index) {
  carouselItemsImg.forEach((item, i) => {
    item.style.display = i === index ? 'block' : 'none';
  });
}

function nextItem() {
  currentIndex = (currentIndex + 1) % carouselItemsImg.length;
  showItem(currentIndex);
}

function prevItem() {
  currentIndex = (currentIndex - 1 + carouselItemsImg.length) % carouselItemsImg.length;
  showItem(currentIndex);
}

nextButton.addEventListener('click', nextItem);
prevButton.addEventListener('click', prevItem);

const carouselContainer = document.querySelector('.carrosel-2');
let itemWidth = carouselItemsText[0].offsetWidth;

const moveRight = () => {
  itemWidth = carouselItemsText[0].offsetWidth; // Recalcula o itemWidth atualizado
  currentIndex = (currentIndex + 1) % carouselItemsText.length;
  carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
};

prevButton2.addEventListener('click', () => {
  itemWidth = carouselItemsText[0].offsetWidth; // Recalcula o itemWidth atualizado
  currentIndex2 = (currentIndex2 - 1 + carouselItemsText.length) % carouselItemsText.length;
  carouselContainer.style.transform = `translateX(-${currentIndex2 * itemWidth}px)`;
});

nextButton2.addEventListener('click', () => {
  itemWidth = carouselItemsText[0].offsetWidth; // Recalcula o itemWidth atualizado
  currentIndex2 = (currentIndex2 + 1) % carouselItemsText.length;
  carouselContainer.style.transform = `translateX(-${currentIndex2 * itemWidth}px)`;
});

setInterval(moveRight, 5000);
carouselContainer.style.transition = 'transform 0.3s ease-in-out';

