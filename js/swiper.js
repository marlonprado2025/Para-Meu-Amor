
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

];

// Cria o container de fotos
const container = document.querySelector('section');
container.innerHTML = `
  <div class="photo-container"></div>
  <div class="nav-buttons">
    <button id="prev-btn"> <<<< </button>
    <button id="next-btn"> >>>> </button>
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

// Navegação com botões
document.getElementById('next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % photos.length;
  updatePhotos();
});

document.getElementById('prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  updatePhotos();
});

// Navegação por deslizar (toque)
let touchStartX = 0;
let touchEndX = 0;

photoContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

photoContainer.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
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