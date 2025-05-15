const startDate = new Date("2014-05-17T00:00:00");
const countdownContainer = document.getElementById("countdown");
const initSpan = document.getElementById("init");
const numeroPorExtenso = [
  "zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez",
  "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove",
  "vinte", "vinte e um", "vinte e dois", "vinte e três", "vinte e quatro", "vinte e cinco",
  "vinte e seis", "vinte e sete", "vinte e oito", "vinte e nove", "trinta"
];

function updateCountdown() {
  const now = new Date();
  let diff = now - startDate;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30.44);
  const years = Math.floor(months / 12);

  const timeValues = {
    Anos: years,
    Meses: months % 12,
    Dias: days % 30 - 1,
    Horas: hours,
    Minutos: minutes,
    Segundos: seconds,
  };

  countdownContainer.innerHTML = Object.entries(timeValues).map(([label, value]) => `
    <div class="time-card">
      <h1>${value}</h1>
      <p>${label.toLocaleLowerCase()}</p>
    </div>
  `).join("");

  const extenso = numeroPorExtenso[Math.min(months, numeroPorExtenso.length - 1)] || months;
  initSpan.textContent = extenso;
}

function togglePlayer() {
  const wrapper = document.getElementById('musicWrapper');
  wrapper.classList.toggle('hidden');
}

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

createHearts();
setInterval(updateCountdown, 1000);
updateCountdown();