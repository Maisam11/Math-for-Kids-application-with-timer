const option1 = document.getElementById("option1"),
      option2 = document.getElementById("option2"),
      option3 = document.getElementById("option3"),
      audio = document.getElementById("myAudio"),
      timerElement = document.getElementById("timer");

let answer = 0;
let timerInterval;

function startTimer() {
  let timeLeft = 30;
  timerElement.innerHTML = timeLeft;

  timerInterval = setInterval(function () {
    timeLeft--;
    timerElement.innerHTML = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      audio.play();
      generate_equation(); // Generate a new equation when time runs out
    }
  }, 1000);
}

function generate_equation() {
  clearInterval(timerInterval); // Clear the previous timer

  let num1 = Math.floor(Math.random() * 13),
      num2 = Math.floor(Math.random() * 13),
      dummyAnswer1 = Math.floor(Math.random() * 10),
      dummyAnswer2 = Math.floor(Math.random() * 10),
      allAnswers = [],
      switchAnswers = [];

  answer = eval(num1 + num2);

  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;

  allAnswers = [answer, dummyAnswer1, dummyAnswer2];

  for (let i = allAnswers.length; i--;) {
    switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  }

  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2];

  startTimer(); // Start the timer for the new equation
}

option1.addEventListener("click", function () {
  if (option1.innerHTML == answer) {
    generate_equation();
  } else {
    audio.play();
  }
});

option2.addEventListener("click", function () {
  if (option2.innerHTML == answer) {
    generate_equation();
  } else {
    audio.play();
  }
});

option3.addEventListener("click", function () {
  if (option3.innerHTML == answer) {
    generate_equation();
  } else {
    audio.play();
  }
});

generate_equation();
