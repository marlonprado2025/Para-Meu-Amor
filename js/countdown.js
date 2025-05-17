const startDate = new Date("2014-05-17T00:00:00-03:00"); // Data de início com fuso horário -03:00
const countdownContainer = document.getElementById("countdown"); // Elemento onde vai ser exibido o contador
const initSpan = document.getElementById("initSpan"); // Elemento para texto por extenso

const numeroPorExtenso = [
  "zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez",
  "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove",
  "vinte", "vinte e um", "vinte e dois", "vinte e três", "vinte e quatro", "vinte e cinco",
  "vinte e seis", "vinte e sete", "vinte e oito", "vinte e nove", "trinta"
];

// Função para atualizar o contador
function updateCountdown() {
  const now = new Date(); // Data atual
  const diff = now - startDate; // Diferença em milissegundos

  // Calcula segundos, minutos, horas
  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;

  // Calcula anos, meses e dias com base nas datas
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  // Ajusta meses e dias se necessário
  if (days < 0) {
    months--;
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const timeValues = {
    Anos: years,
    Meses: months,
    Dias: days,
    Horas: hours,
    Minutos: minutes,
    Segundos: seconds,
  };

  // Atualiza o HTML do contador
  countdownContainer.innerHTML = Object.entries(timeValues).map(([label, value]) => `
    <div class="time-card">
      <h1>${value}</h1>
      <p>${label.toLocaleLowerCase()}</p>
    </div>
  `).join("");

  // Define o texto por extenso para meses
  const extenso = numeroPorExtenso[Math.min(months, numeroPorExtenso.length - 1)] || months;
  initSpan.textContent = extenso;
}

// Função para alternar visibilidade do player de música
function togglePlayer() {
  const wrapper = document.getElementById('musicWrapper');
  wrapper.classList.toggle('hidden');
}

// Função para criar os corações
function createHearts() {
  const container = document.getElementById('hearts');
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (5 + Math.random() * 5) + 's';
    heart.style.opacity = Math.random() * 0.3 + 0.5;
    container.appendChild(heart);
  }
}

// Inicializa os corações e o contador
createHearts();
setInterval(updateCountdown, 1000); // Atualiza a cada segundo
updateCountdown(); // Executa imediatamente