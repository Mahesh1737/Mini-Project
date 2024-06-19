const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");

const attemptCount = document.querySelector("#attempt-count");

const finalWinnerPara = document.querySelector("#f-win");

const finalWinnerSection = document.querySelector(".final-winner");

const newBtn = document.querySelector(".new-game");

// const userWin=true;

let userScore = 0;
let compScore = 0;
let cnt = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const genCompChoice = (userChoice) => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("Draw Game, Play again");
  // msg.innerText = "Draw Game, Play again";
  msg.innerText = "Game Draw, Play again";
  msg.style.backgroundColor = "#4cc9f0";
};

const showWinner = (userWin, userChoice, compChoice) => {
  finalWinnerSection.classList.add("hide");
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose. ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
  }
};




const playGame = (userChoice) => {
  // finalWinnerSection.classList.add("hide");
  const compChoice = genCompChoice(userChoice);
  let userWin = true;

  if (userChoice === compChoice) {
    // msg.innerText = "Game Draw, Play again";
    // msg.style.backgroundColor="black";
    drawGame();
    // cnt++;
    return;
  } else {
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    cnt++;
  }
  attemptCount.innerText = cnt;
  showWinner(userWin, userChoice, compChoice);
  console.log(
    `Attempts: ${cnt}, User Score: ${userScore}, Comp Score: ${compScore}`
  );

  if (cnt >= 10) {
    ShowFinalWinner(cnt, userScore, compScore);
  }
};

const ShowFinalWinner = (cnt, userScore, compScore) => {
  finalWinnerSection.classList.remove("hide");
  console.log("10 Attempts are Completted");
  if (userScore > compScore) {
    console.log("User Wins");
    finalWinnerPara.innerText = `User Win. User-Score ${userScore}`;
    finalWinnerPara.style.color = "#3f37c9";
  } else if (userScore == compScore) {
    console.log("Game Draw");
    finalWinnerPara.innerText = `Game Draw`;
    finalWinnerPara.style.color = "#3f37c9";
  } else {
    console.log("User Lose");
    finalWinnerPara.innerText = `User Lose. by ${compScore - userScore} Points`;
    finalWinnerPara.style.color = "red";
  }
};

newBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  cnt = 0;
  userScorePara.innerText = 0;
  compScorePara.innerText = 0;
  attemptCount.innerText = 0;
  msg.innerText = "";
  finalWinnerSection.classList.add("hide");
  msg.style.backgroundColor="transparent";
});
