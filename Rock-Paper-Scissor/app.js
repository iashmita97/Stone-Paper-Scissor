let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["STONE", "PAPER", "SCISSORS"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "THE GAME WAS A DRAW.  PLAY AGAIN!";
  msg.style.backgroundColor = "#af003aff";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `YOU WIN!  YOUR ${userChoice} BEATS ${compChoice} :)`;
    msg.style.backgroundColor = "#0c9400ff";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `YOU LOST.  ${compChoice} BEATS YOUR ${userChoice} :(`;
    msg.style.backgroundColor = "#c00404ff";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "PAPER" ? false : true;
    } else if (userChoice === "PAPER") {
      userWin = compChoice === "SCISSORS" ? false : true;
    } else {
      userWin = compChoice === "STONE" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});