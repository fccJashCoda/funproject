const clock = document.querySelector('h1');

const clockTick = setInterval(() => updateTime(), 1000);

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, 0);
  clock.textContent = `${hours}:${minutes}`;
}
