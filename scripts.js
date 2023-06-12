let playerScore = 0;            // create variables to keep track of the scores
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor((Math.random() * 100));
  if (random < 100 / 3) {
    return 'rock';
  } else if (random > 100 / 3 && random < 200 / 3) {            // function to determine what the computer chooses, it has a 1/3 chance of outputting rock, paper or scissors
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getPlayerChoice() {
  let choice = prompt('Rock, Paper or Scissors!').toLowerCase();
  if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
    alert('please choose either rock, paper or scissors!');                        //function to aks the player to input their choice (case insensitive) but not allow them to input anything other than rock, paper scissors
    return getPlayerChoice();
  } else if (choice == 'rock' || choice == 'paper' || choice == 'scissors') {
    return choice;
  }
}

function rockPaperScissors(playerSelection, computerSelection) {              //function to play a round of rock, paper scissors, determines who won, returns results and adds to scores

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

function scores(playerScore, computerScore) {                   // function to tally up scores and display who won and final scores
  if (playerScore > computerScore) {
    return `Player wins by ${playerScore} to ${computerScore}!`;
  } else if (computerScore > playerScore) {
    return `Computer wins by ${computerScore} to ${playerScore}!`;
  } else {
    return `It's a draw! The scores were tied at ${playerScore} and ${computerScore}! `;
  }
}

const start = document.querySelector('button');

start.addEventListener("click", () => {                   // eventlistener to wait until button is pressed before looping through 5 rounds of rock paper scissors
  for (let i = 1; i <= 5; i++) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    let result = rockPaperScissors(playerSelection, computerSelection);

    console.log(`Round ${i} results: `, result);        // display results after each round 
  } console.log(scores(playerScore, computerScore));
  playerScore = 0;
  computerScore = 0;                                    // reset scores back to 0 - 0 after 5 rounds
});





