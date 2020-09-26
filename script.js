import { startConfetti , stopConfetti , removeConfetti } from './confetti.js'

const playerScoreEL = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoiceEL');

const computerScoreEL = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoiceEL');
const resultText = document.getElementById('resultText')

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = '';
let computerScoreNumber = '';
let computerChoice = '';

console.log(allGameIcons);
// reset
function resetSelected(){
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
  stopConfetti();
  removeConfetti();
}

// reset score
function resetAll(){
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEL.textContent = playerScoreNumber;
  computerScoreEL.textContent = computerScoreNumber;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resultText.textContent = '';
  resetSelected();
}
window.resetAll = resetAll;
// random computer choice
function computerRandomChoice(){
  const computerChoiceNumber = Math.random();
  if(computerChoiceNumber < 0.2){
    computerChoice = 'rock';
  } else if (computerChoiceNumber <= 0.4){
    computerChoice = 'paper';
  } else if (computerChoiceNumber <= 0.6){
    computerChoice = 'scissors';
  } else if (computerChoiceNumber <= 0.8){
    computerChoice = 'lizard';
  } else{
    computerChoice = 'spock';
  }
  
}

// add computer choice
function displayComputerChoice() {
   
  switch(computerChoice){
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEL.textContent = '--- Rock';
      break;

    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEL.textContent = '--- Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEL.textContent = '--- Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEL.textContent = '--- Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEL.textContent = '--- Spock';
      break;    
    default:
      break;
  }
}
// check result and update
function updateScore(playerChoice){
  
  if(playerChoice === computerChoice){
    
    resultText.textContent = "It's a tie!"
  }else{
    const choice = choices[playerChoice];
    
    if(choice.defeats.indexOf(computerChoice) > -1){
      startConfetti();
      resultText.textContent = "You Won!";
      playerScoreNumber++;
      playerScoreEL.textContent = playerScoreNumber;
    } else{
      stopConfetti();
      resultText.textContent = "You Loose!";
      computerScoreNumber++;
      computerScoreEL.textContent = computerScoreNumber;
    }
  }
}
// call function
function checkResult(playerChoice){
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}
// player
function select(playerChoice){
  checkResult(playerChoice);
  // add selected styling update 
  switch(playerChoice){
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEL.textContent = '--- Rock';
      break;

    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEL.textContent = '--- Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEL.textContent = '--- Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEL.textContent = '--- Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEL.textContent = '--- Spock';
      break;    
    default:
      break;
  }
}

window.select = select;
// on load
resetAll();

