const score = document.querySelector('.score');
const start = document.querySelector('.start');
const gameArea = document.querySelector('.gameArea');
const car = document.createElement('div');

car.classList.add('car');

start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

function startGame() {
    start.classList.add('hide');
    settings.start = true;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame);
}

function playGame() {
    console.log('playGame');
    if (settings.start) {
        requestAnimationFrame(playGame);
    }
}

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
}

const settings = {
    start: false,
    score: 0,
    speed: 3
}

function startRun(event) {
    event.preventDefault();
    console.log(event.key);
    keys[event.key] = true;
}

function stopRun(event) {
    event.preventDefault();
    console.log(event.key);
    keys[event.key] = false;
}