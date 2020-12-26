window.addEventListener("load", initialStart);
const seconds = document.getElementById("seconds");
const currentWord = document.getElementById("current-word");
const wordInput = document.getElementById("word-input");
const message = document.getElementById("message");
const timeLeft = document.getElementById("time");
const scoreBoard = document.getElementById("score");
const highScore = document.getElementById("highscore");
let score = 0;
let high_score = 0;
let isPlaying;
let time = 5;
let prevWord;

const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
];

function initialStart() {
  showWord(words);
  wordInput.addEventListener("input", startMatch);
  setInterval(countDown, 1000);
  setInterval(checkStatus, 50);
}

const countDown = () => {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
    message.innerHTML = "Game Over!!!";
  }
  timeLeft.innerHTML = time;
};

function checkStatus() {
  if (!isPlaying || time === 0) {
    message.innerHTML = "Game Over!!!";
    // score = -1;
  }
}

function showWord(words) {
  let randomWordIndex = Math.floor(Math.random() * words.length);
  let randomWord = words[randomWordIndex];
  currentWord.innerHTML = randomWord;
  if (prevWord === randomWord) {
    return showWord(words);
  }
  prevWord = randomWord;
}

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = 6;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  //   if (score === -1) {
  //     scoreBoard.innerHTML = 0;
  //   } else {
  //     scoreBoard.innerHTML = score;
  //   }
  scoreBoard.innerHTML = score;
  if (high_score > score) {
    highScore.innerHTML = high_score;
  }
  high_score = score;
}

function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

function restartGame() {
  console.log("hello");
  isPlaying = true;
  time = 5;
  score = 0;
  wordInput.value = "";
  showWord(words);
}
