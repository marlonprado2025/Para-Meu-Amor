const imagens = [
  'foto1.jpg',
  'foto2.jpg',
  'foto3.jpg',
  'foto4.jpg',
  'foto5.jpg',
  'foto6.jpg',
  'foto7.jpg',
  'foto8.jpg',
  'foto9.jpg',
  'foto10.jpg',
  'foto11.jpg',
  'foto12.jpg',
  'foto13.jpg',
  'foto14.jpg',
  'foto15.jpg',
  'foto16.jpg',
  'foto17.jpg',
  'foto18.jpg',
  'foto19.jpg',
  'foto20.jpg',
  'foto21.jpg',
  'foto22.jpg',
  'foto23.jpg',
  'foto24.jpg',
  'foto25.jpg',
  'foto26.jpg',
  'foto27.png',
  'foto28.jpg',
  'foto29.jpg',
  'foto30.jpg',
  'foto31.jpg',
];

// Cria o container de fotos
const container = document.querySelector('section');
container.innerHTML = `
  <div class="photo-container"></div>
  <div class="nav-buttons">
    <button id="prev-btn"> << </button>
    <button id="next-btn"> >> </button>
  </div>
`;
const photoContainer = document.querySelector('.photo-container');

// Adiciona as fotos
imagens.forEach((nome, index) => {
  const img = document.createElement('img');
  if (index === 0) {
    img.className = 'photo photo-main';
  } else {
    img.className = `photo photo-background photo-background-${index - 1}`;
  }
  img.src = `assets/images/${nome}`;
  img.alt = nome;
  photoContainer.appendChild(img);
});

// Variáveis para navegação
let currentIndex = 0;
const photos = document.querySelectorAll('.photo');
let autoSlideInterval;

// Função para atualizar as fotos
function updatePhotos() {
  photos.forEach((photo, index) => {
    if (index === currentIndex) {
      photo.className = 'photo photo-main';
    } else {
      const bgIndex = (index - currentIndex + photos.length) % photos.length;
      photo.className = `photo photo-background photo-background-${bgIndex}`;
    }
  });
}

// Função para iniciar o carrossel automático
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % photos.length;
    updatePhotos();
  }, 7000); // Troca a cada 5 segundos (5000ms)
}

// Função para pausar o carrossel automático
function pauseAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Iniciar o carrossel automático ao carregar a página
startAutoSlide();

// Navegação com botões
document.getElementById('next-btn').addEventListener('click', () => {
  pauseAutoSlide(); // Pausa o carrossel ao interagir
  currentIndex = (currentIndex + 1) % photos.length;
  updatePhotos();
  startAutoSlide(); // Reinicia o carrossel após a interação
});

document.getElementById('prev-btn').addEventListener('click', () => {
  pauseAutoSlide(); // Pausa o carrossel ao interagir
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  updatePhotos();
  startAutoSlide(); // Reinicia o carrossel após a interação
});

// Navegação por deslizar (toque)
let touchStartX = 0;
let touchEndX = 0;

photoContainer.addEventListener('touchstart', (e) => {
  pauseAutoSlide(); // Pausa o carrossel ao interagir
  touchStartX = e.changedTouches[0].screenX;
});

photoContainer.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
  startAutoSlide(); // Reinicia o carrossel após a interação
});

// Função para lidar com o deslize
function handleSwipe() {
  const minSwipeDistance = 50;
  if (touchEndX < touchStartX - minSwipeDistance) {
    currentIndex = (currentIndex + 1) % photos.length;
    updatePhotos();
  } else if (touchEndX > touchStartX + minSwipeDistance) {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updatePhotos();
  }
}