const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const div = document.querySelector('div');
const message = document.querySelector('#message');
const score = document.querySelector('#score');


let playerSelection;



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



// const computerSelection = getComputerChoice();


let playerScore = 0;
let computerScore = 0;



function playRound(playerSelection,computerSelection){

    

    let lowercase = playerSelection.toLowerCase();
   
     
    if(lowercase === computerSelection){
        message.innerText ='Tie!'
        score.innerText = `Computer Score: ${computerScore} Player Score: ${playerScore}`
    }else if((lowercase === 'rock' && computerSelection === 'paper') || 
    (lowercase === 'scissors' && computerSelection === 'rock') || (lowercase === 'paper' && computerSelection === 'scissors')){
        message.innerText = `You Lose! ${computerSelection} beats ${lowercase}`
        computerScore += 1
        score.innerText = `Computer Score: ${computerScore} Player Score: ${playerScore}`
    }else{
        message.innerText = `You Win! ${lowercase} beats ${computerSelection}`;
        playerScore += 1
        score.innerText = `Computer Score: ${computerScore} Player Score: ${playerScore}`
    }


}

function getChoice(event) {
    playerSelection = event.target.id;
    let computerSelection = getComputerChoice();

    playRound(playerSelection,computerSelection);

    
}

rock.addEventListener('click',getChoice);
paper.addEventListener('click',getChoice);
scissors.addEventListener('click',getChoice);


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




