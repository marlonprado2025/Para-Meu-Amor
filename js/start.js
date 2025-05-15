document.addEventListener('DOMContentLoaded', () => {
  const startScreen = document.querySelector('.start-screen');
  const startBtn = document.getElementById('start-btn');
  const audio = document.querySelector('.music-player audio');

  // Garantir que o áudio não toque automaticamente
  audio.pause();

  startBtn.addEventListener('click', () => {
    // Ocultar a tela inicial
    startScreen.classList.remove('active');

    // Iniciar o áudio
    audio.play().catch(error => {
      console.error('Erro ao tentar tocar o áudio:', error);
    });
  });
});