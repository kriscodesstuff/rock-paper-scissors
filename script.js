const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let playerSelection;

function getPlayerChoice(event) {
    playerSelection = event.target.id;
}


rock.addEventListener('click',getPlayerChoice);



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


let playerScore = 0;
let computerScore = 0;



function playRound(playerSelection,computerSelection){

    

    let lowercase = playerSelection.toLowerCase();
   
     
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

// function game(){
//   playRound(playerSelection,computerSelection);

//   // After each round reset the player's selection and the computer's selection

//   let newPlayerSelection = prompt('Rock, Paper or Scissors?');
//   let newComputerSelection = getComputerChoice();

//   playRound(newPlayerSelection,newComputerSelection);

//   newPlayerSelection = prompt('Rock, Paper or Scissors?');
//   newComputerSelection = getComputerChoice();

//   playRound(newPlayerSelection,newComputerSelection);

//   newPlayerSelection = prompt('Rock, Paper or Scissors?');
//   newComputerSelection = getComputerChoice();

//   playRound(newPlayerSelection,newComputerSelection);

//   newPlayerSelection = prompt('Rock, Paper or Scissors?');
//   newComputerSelection = getComputerChoice();

//   playRound(newPlayerSelection,newComputerSelection); 
  
//   // Compare the player's score and the computer's score and print out who won

//   if(computerScore > playerScore){
//     console.log('Computer wins!');
//   }else if(playerScore > computerScore){
//     console.log('Player wins!');
//   }else{
//     console.log("It's a tie!");
//   }
// }

// game();




