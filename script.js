// Create a function that randomly generates Rock, Paper or Scissors

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

// Store the Computer Selection and the player selection into variables

const computerSelection = getComputerChoice();
const playerSelection = prompt('Rock, Paper or Scissors');

// Create variable to keep score of all the matches

let playerScore = 0;
let computerScore = 0;

// Create a function that plays a single round of Rock, Paper, Scissors

function playRound(playerSelection,computerSelection){

    // Make the player's selection case insensitive by converting it to lowercase

    let lowercase = playerSelection.toLowerCase();
   
    // Compare the player's selection and the computer's selection and console.log the winner and increment their score
     
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

}


// Create a function that plays the game for 5 rounds and tallies up the score

function game(){
  playRound(playerSelection,computerSelection);

  // After each round reset the player's selection and the computer's selection

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
  
  // Compare the player's score and the computer's score and print out who won

  if(computerScore > playerScore){
    console.log('Computer wins!');
  }else if(playerScore > computerScore){
    console.log('Player wins!');
  }else{
    console.log("It's a tie!");
  }
}

game();
