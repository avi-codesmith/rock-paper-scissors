"use strict";

// Select all options (radio inputs with class 'op')
const allOptions = document.querySelectorAll(".op");

// Event listener for all options (Rock, Paper, Scissor)
allOptions.forEach((option) => {
  option.addEventListener("click", function () {
    // Check which option is selected
    const selectedOption = option.id;

    // Change image source based on selected option
    if (selectedOption === "option1") {
      document.querySelector(".you-hand").src = "stonePlayer.png"; // Rock
    } else if (selectedOption === "option2") {
      document.querySelector(".you-hand").src = "paperPlayer.png"; // Paper
    } else if (selectedOption === "option3") {
      document.querySelector(".you-hand").src = "scissorsPlayer.png"; // Scissor
    }

    // Add animation to both hands
    document.querySelector(".you-hand").classList.add("move");
    document.querySelector(".comp-hand").classList.add("move");

    // Remove animation after it completes
    setTimeout(() => {
      document.querySelector(".you-hand").classList.remove("move");
      document.querySelector(".comp-hand").classList.remove("move");
    }, 400); // Match the animation duration (0.4s)
  });
});
