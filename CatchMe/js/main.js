let time = 60;
let level = 1;
let score = 0;
let points = 10;
let speed = 300;
let missed = 0;

const TimeValue = document.querySelector(".timer .value");
const CurrentLevel = document.querySelector(".level .value");
const AddScore = document.querySelector(".score .value");
const NewPoints = document.querySelector(".points-left .value");
const mp = document.querySelector(".missed-clicks .value");
const Spn = document.querySelector(".spinner");
const Blk = document.querySelector(".black-area");

/*lottery a random number*/
function randomArea(from, to) {
  return Math.floor(Math.random() * (to - from) + from);
}

/*timer activation*/
function startTimer() {
  setInterval(function () {
    if (time > 0) {
      TimeValue.innerText = time - 1;
      time--;
    } else {
      gameOver();
    }
  }, 1000);
}
/*add time to timer*/
function addToTimer() {
  time += 10;
}
/*increase the level*/
function nextLevel() {
  CurrentLevel.innerText = level += 1;
}
/*add score to current score*/
function addScore() {
  let currentScore = +AddScore.innerText;
  currentScore += level * 10;
  AddScore.innerText = currentScore;
  score = currentScore;
  if (currentScore < 0) {
    AddScore.style.color = "red";
  } else {
    AddScore.style.color = "green";
  }
}
/*deduct score from current score*/
function deductScore() {
  let currentScore = +AddScore.innerText;
  currentScore -= level;
  AddScore.innerText = currentScore;
  score = currentScore;
  if (currentScore < 0) {
    AddScore.style.color = "red";
  } else {
    AddScore.style.color = "green";
  }
}
/*reset the left point when a level starts*/
function resetPointsLeft() {
  points = 10;
  NewPoints.innerText = points;
}
/*deduct points left after each true click*/
function deductPointsLeft() {
  points--;
  NewPoints.innerText = points;
}
/*count the missed points*/
function missedPoints() {
  missed++;
  mp.innerText = missed;
}
/*each level the speed of animation increase*/
function rotationSpeed() {
  const spinning = document.querySelector(".spinning");
  const currentDuration = parseFloat(
    getComputedStyle(spinning).getPropertyValue(`animation-duration`)
  );
  let newDuration = currentDuration;
  newDuration -= 0.25;
  spinning.style.animationDuration = newDuration + `s`;
}
/*in each level the animation moving speed is increase*/
function movingSpeed() {
  speed -= 50;
}

function spinnerMousrOver() {
  setTimeout(function () {
    Spn.style.top =
      randomArea(
        Spn.clientHeight / 2,
        Blk.clientHeight - Spn.clientWidth * 0.75
      ) + `px`;
    Spn.style.left = randomArea(0, Blk.clientWidth - Spn.clientWidth) + `px`;
  }, speed);
}

function clickOnSpinner() {
  addScore();
  deductPointsLeft();
  if (points === 0) {
    movingSpeed();
    rotationSpeed();
    nextLevel();
    resetPointsLeft();
    addToTimer();
  }
}

function clickOnBlackArea() {
  deductScore();
  missedPoints();
}

function confirmStartPlay() {
  if (confirm("Are you sure start?")) {
    startTimer();
    Spn.classList.add("spinning");
    document
      .querySelector(".black-area")
      .addEventListener("click", clickOnBlackArea);
    Spn.addEventListener("mouseover", spinnerMousrOver);
    Spn.addEventListener("click", clickOnSpinner);
  }
}

function gameOver() {
  // Create a div element to serve as the popup
  const popup = document.createElement("div");
  popup.classList.add("game-over-popup");

  // Create a heading element for the popup
  const heading = document.createElement("h2");
  heading.textContent = "Game Over";

  // Create a paragraph element for the popup
  const message = document.createElement("p");
  message.textContent = "Sorry, you lost the game. \nYour scores are: " + score;

  // Create a button element to close the popup
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", function () {
    // Hide the popup when the close button is clicked
    popup.style.display = "none";
  });

  // Append the heading, message, and close button to the popup
  popup.appendChild(heading);
  popup.appendChild(message);
  popup.appendChild(closeButton);

  // Append the popup to the document body
  document.body.appendChild(popup);

  Spn.removeEventListener("mouseover", spinnerMousrOver);
  Spn.removeEventListener("click", clickOnSpinner);
  document
    .querySelector(".black-area")
    .removeEventListener("click", clickOnBlackArea);

  document
    .querySelector(".start-game")
    .removeEventListener("click", confirmStartPlay);

  Spn.classList.remove("spinning");
  Spn.style.left = "0px";
  Spn.style.top = "0px";

  time = 60;
  level = 1;
  score = 0;
  points = 10;
  speed = 300;
  missed = 0;

  TimeValue.innerText = time;
  CurrentLevel.innerText = level;
  AddScore.innerText = score;
  NewPoints.innerText = points;
  mp.innerText = missed;

  confirmStartPlay();
}

function changeText() {
  const start = document.querySelector(".start-game");
  start.addEventListener("mouseover", () => {
    const Txt = document.querySelector(".start-game span");
    Txt.innerText = "click here for start play...";
  });
  start.addEventListener("mouseout", () => {
    const Txt = document.querySelector(".start-game span");
    Txt.innerText = "CATCH ME IF YOU CAN";
  });
}

(function onStart() {
  changeText();
  const conf = document.querySelector(".start-game");
  conf.addEventListener("click", confirmStartPlay);
})();

