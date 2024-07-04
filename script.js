
// Seleciona os elementos do carrossel
const carouselContainer = document.querySelector('.carousel-container');
const carouselInner = document.querySelector('.carousel-inner');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');
const images = document.querySelectorAll('.carousel-inner img');

// Define a largura de cada imagem
const imageWidth = carouselContainer.offsetWidth;

// Define a posição atual do carrossel
let currentPosition = 0;

// Função para ir para a imagem anterior
function prevImage() {
  currentPosition -= imageWidth;
  carouselInner.style.transform = translateX(${currentPosition}px);
}

// Função para ir para a imagem seguinte
function nextImage() {
  currentPosition += imageWidth;
  carouselInner.style.transform = translateX(${currentPosition}px);
}

// Adiciona eventos de clique aos controles do carrossel
carouselPrev.addEventListener('click', prevImage);
carouselNext.addEventListener('click', nextImage);

// Faz o carrossel rodar automaticamente
setInterval(nextImage, 5000); // roda a cada 5 segundos
