let playerScore = 0;
let computerScore = 0;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerChoice = document.querySelector('.player-choice');
const roundResults = document.querySelector('.round-results');
const finalScores = document.querySelector('.final-scores');
const currentScores = document.querySelector('.scores');
const start = document.querySelector('.play-round');
const startAgain = document.querySelector('.play-again');
let playerSelection = "";
let counter = 0;

function getComputerChoice() {
  let random = Math.floor((Math.random() * 100));
  if (random < 100 / 3) {
    return 'rock';
  } else if (random > 100 / 3 && random < 200 / 3) {
    return 'paper'
  } else {
    return 'scissors';
  }
}

function rockPaperScissors(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
    playerScore += 1;
    return `You Won! Computer chose ${computerSelection}!`
  } else if (computerSelection == "rock" && playerSelection == "scissors" || computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper") {
    computerScore += 1;
    return `You Lost! Computer chose ${computerSelection}!`
  } else {
    return `Nobody won! Computer chose ${computerSelection} as well!`
  }
}

function scores(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return `You won by ${playerScore} - ${computerScore}!`;
  } else if (computerScore > playerScore) {
    return `Computer wins by ${computerScore} - ${playerScore}!`;
  } else {
    return `It's a draw! The scores were tied at ${playerScore} - ${computerScore}! `;
  }
}

function playRound() {
  if (playerSelection == '') return playerChoice.textContent = 'Please choose before playing.'
  counter++
  computerSelection = getComputerChoice();
  let result = rockPaperScissors(playerSelection, computerSelection);
  const content = document.createElement('p');
  content.textContent = `Round ${counter}: ` + result;
  currentScores.textContent = `Player is on ${playerScore}` + ` and Computer is on ${computerScore}`;
  roundResults.appendChild(content);
  playerSelection = '';
  playerChoice.textContent = 'Please choose before playing.'
  if (counter == 5) {
    start.disabled = true;
    finalScores.textContent = scores(playerScore, computerScore);
    playerChoice.textContent = ''
  }
}

rock.addEventListener('click', () => playerSelection = 'rock');
rock.addEventListener('click', () => playerChoice.textContent = 'You have chosen rock');
paper.addEventListener('click', () => playerSelection = 'paper');
paper.addEventListener('click', () => playerChoice.textContent = 'You have chosen paper');
scissors.addEventListener('click', () => playerSelection = 'scissors');
scissors.addEventListener('click', () => playerChoice.textContent = 'You have chosen scissors')
start.addEventListener("click", playRound);
startAgain.addEventListener('click', () => { location.reload() });






