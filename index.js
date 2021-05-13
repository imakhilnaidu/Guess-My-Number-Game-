"use strict";

// Generating random numbers
const randomNumber = Math.floor(Math.random() * 20) + 1;
var score = 10;
// Creating Local Storage
let data = window.sessionStorage;

// Reading Data
const userInput = document.querySelector("#container-input");
const alert = document.querySelector(".container-alert");
const scoreText = document.querySelector(".card-score");
const highScore = document.querySelector(".card-high-score");
const btn = document.querySelector(".container-check");
const userName = document.querySelector("#container-name");
const go = document.querySelector(".container-box-btn");
const cardName = document.querySelector(".card-name");

// Checking storage is null or not
if (data.getItem("highScore") != null) {
  highScore.innerHTML = `: ${data.getItem("highScore")}`;
} else {
  data.setItem("highScore", 0);
}

// Activating Check Button
const checkInput = () => {
  if (userInput.value.length > 0) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
    alert.innerHTML = "Enter input";
  }
};

// Activating Go button
const checkName = () => {
  if (userName.value.length > 0) {
    go.disabled = false;
  } else {
    go.disabled = true;
    alert.innerHTML = "Name is not entered";
  }
};

// Get user name
const getName = () => {
  data.setItem("un", userName.value);
  userName.value = "";
  window.location.reload();
};

if (data.getItem("un") == null) {
  cardName.innerHTML = ":";
} else {
  cardName.innerHTML = `: ${data.getItem("un")}`;
}

// Checking Value
const checkValue = () => {
  if (userInput.textContent !== " ") {
    if (Number(userInput.value) === randomNumber) {
      alert.innerHTML = "🎉Correct Number!🎉";
      document.querySelector(".container-number").innerHTML = randomNumber;
      userInput.style.backgroundColor = "#9ede73";
      if (score > data.getItem("highScore")) {
        data.setItem("highScore", score);
      } else {
        data.setItem("highScore", hScore.getItem("highScore"));
      }
    } else if (Number(userInput.value) > randomNumber) {
      alert.innerHTML = "Too High";
      score -= 1;
      scoreText.innerHTML = `: ${score}`;
    } else if (Number(userInput.value) < randomNumber) {
      alert.innerHTML = "Too Low";
      score -= 1;
      scoreText.innerHTML = `: ${score}`;
    }

    if (score === 0) {
      btn.disabled = true;
      alert.innerHTML = "You are out off chances!";
    }
  } else {
    alert.innerHTML = "Enter input...!";
  }
};

// Re-setting High Score
const resetValue = () => {
  data.removeItem("highScore");
  data.removeItem("un");
  window.location.reload();
};

console.log(data);
