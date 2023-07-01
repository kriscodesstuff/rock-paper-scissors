function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if(randomNum === 0){
       return 'rock';
    }else if(randomNum === 1){
       return 'paper';
    }else if(randomNum === 2){
       return 'scissors';
    }
}

const computerSelection = getComputerChoice();
const playerSelection = prompt('Rock, Paper or Scissors');
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection,computerSelection){
    let lowercase = playerSelection.toLowerCase();
    console.log(lowercase);
     
    if(lowercase === computerSelection){
        console.log('Tie!');
    }else if((lowercase === 'rock' && computerSelection === 'paper') || 
    (lowercase === 'scissors' && computerSelection === 'rock') || (lowercase === 'paper' && computerSelection === 'scissors')){
        console.log(`You Lose! ${computerSelection} beats ${lowercase}`);
        computerScore += 1
    }else{
        console.log(`You Win! ${lowercase} beats ${computerSelection}`);
        playerScore += 1
    }

    console.log(playerScore,computerScore);
}



function game(){
  playRound(playerSelection,computerSelection);

  let newPlayerSelection = prompt('Rock, Paper or Scissors?');
  let newComputerSelection = getComputerChoice();

  playRound(newPlayerSelection,newComputerSelection);

  newPlayerSelection = prompt('Rock, Paper or Scissors?');
  newComputerSelection = getComputerChoice();

  playRound(newPlayerSelection,newComputerSelection);

  newPlayerSelection = prompt('Rock, Paper or Scissors?');
  newComputerSelection = getComputerChoice();

  playRound(newPlayerSelection,newComputerSelection);

  newPlayerSelection = prompt('Rock, Paper or Scissors?');
  newComputerSelection = getComputerChoice();

  playRound(newPlayerSelection,newComputerSelection);  

  if(computerScore > playerScore){
    console.log('Computer wins!');
  }else if(playerScore > computerScore){
    console.log('Player wins!');
  }else{
    console.log("It's a tie!");
  }
}

game();
