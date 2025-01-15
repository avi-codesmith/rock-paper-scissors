"use strict";

const computer = document.querySelector(".comp-hand");
const you = document.querySelector(".you-hand");
const comPointsElement = document.querySelector(".comPoints");
const youPointsElement = document.querySelector(".youPoints");
const options = document.querySelectorAll(".option button");
const sound = new Audio("sound.mp3");
const win = new Audio("win.mp3");
const lose = new Audio("lose.mp3");
let playing = true;

options.forEach((button) => {
  button.addEventListener("click", function () {
    if (playing) {
      computer.classList.add("move");
      you.classList.add("move");

      sound.pause();
      sound.currentTime = 0;
      sound.play();

      setTimeout(() => {
        computer.classList.remove("move");
        you.classList.remove("move");

        you.src = button.innerHTML + "Player.png";

        let random = Math.trunc(Math.random() * 3);
        const comp = ["stone", "paper", "scissors"];
        let choice = comp[random];
        computer.src = choice + "Computer.png";

        let cPoints = parseInt(comPointsElement.innerHTML);
        let yPoints = parseInt(youPointsElement.innerHTML);

        if (button.innerHTML === "stone") {
          if (choice === "paper") {
            cPoints++;
            comPointsElement.innerHTML = cPoints;
          } else if (choice === "scissors") {
            yPoints++;
            youPointsElement.innerHTML = yPoints;
          }
        } else if (button.innerHTML === "paper") {
          if (choice === "stone") {
            yPoints++;
            youPointsElement.innerHTML = yPoints;
          } else if (choice === "scissors") {
            cPoints++;
            comPointsElement.innerHTML = cPoints;
          }
        } else if (button.innerHTML === "scissors") {
          if (choice === "paper") {
            yPoints++;
            youPointsElement.innerHTML = yPoints;
          } else if (choice === "stone") {
            cPoints++;
            comPointsElement.innerHTML = cPoints;
          }
        }

        if (cPoints === 3) {
          document.querySelector(".body").style.backgroundColor = "#fa5252";
          document.querySelector("h1").textContent = "You Loose!";
          lose.pause();
          lose.currentTime = 0;
          lose.play();
          playing = false;
        } else if (yPoints === 3) {
          document.querySelector(".body").style.backgroundColor = "#60b347";
          document.querySelector("h1").textContent = "You Won!";
          win.pause();
          win.currentTime = 0;
          win.play();
          playing = false;
        }

        document
          .querySelector(".margin-b")
          .addEventListener("click", function () {
            location.reload();
          });
      }, 500);
    }
  });
});
