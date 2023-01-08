function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const Body = document.querySelector('body');
let timer = null;


startBtn.addEventListener('click', () => {
  timer = setInterval(() => {
    Body.style.backgroundColor = getRandomHexColor()
  }, 1000);
}, {once: true});

stopBtn.addEventListener('click', () => {
  clearInterval(timer);
});
