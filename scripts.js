let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor((Math.random() * 100));
  if (random < 100 / 3) {
    return 'rock';
  } else if (random > 100 / 3 && random < 200 / 3) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getPlayerChoice() {
  let choice = prompt('Rock, Paper or Scissors!').toLowerCase();
  if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
    alert('please choose either rock, paper or scissors!');
    return getPlayerChoice();
  } else if (choice == 'rock' || choice == 'paper' || choice == 'scissors') {
    return choice;
  }
}

function rockPaperScissors(playerSelection, computerSelection) {

  if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
    playerScore += 1;
    return `You Won! ${playerSelection} beat ${computerSelection}`
  } else if (computerSelection == "rock" && playerSelection == "scissors" || computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper") {
    computerScore += 1;
    return `You Lost! ${computerSelection} beat ${playerSelection}`
  } else {
    return `Nobody won! Neither ${computerSelection} nor ${playerSelection} beat each other!`
  }
}

function scores(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return `Player wins by ${playerScore} to ${computerScore}!`;
  } else if (computerScore > playerScore) {
    return `Computer wins by ${computerScore} to ${playerScore}!`;
  } else {
    return `The scores are tied at ${playerScore} and ${computerScore}! `;
  }
}

const start = document.querySelector('button');

start.addEventListener("click", () => {
  for (let i = 1; i <= 5; i++) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    let result = rockPaperScissors(playerSelection, computerSelection);

    console.log(`Round ${i} results: `, result);
  } console.log(scores(playerScore, computerScore));
  playerScore = 0;
  computerScore = 0;
});





