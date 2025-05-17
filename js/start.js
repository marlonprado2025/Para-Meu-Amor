document.addEventListener('DOMContentLoaded', () => {
  const startScreen = document.getElementById('start-screen');// Obtém a tela inicial
  const startBtn = document.getElementById('start-btn');// Obtém o botão de início
  const mainContent = document.getElementById('main-content');// Obtém o conteúdo principal
  const audio = document.querySelector('.music-player audio');// Obtém o elemento de áudio

  // Garante que o conteúdo principal fique escondido
  mainContent.style.display = 'none';// Esconde o conteúdo principal
  audio.pause();// Pausa a música, se houver erro, exibe no console

  // Adiciona um evento de clique ao botão de início
  startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';      // Esconde a tela inicial
    mainContent.style.display = 'block';     // Mostra o conteúdo principal
    audio.play().catch((err) => console.log(err));// Inicia a música, se houver erro, exibe no console
  });
});
