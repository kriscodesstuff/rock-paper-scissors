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


function playRound(playerSelection,computerSelection){
    let lowercase = playerSelection.toLowerCase();
    console.log(lowercase);
    
    if(lowercase === computerSelection){
        console.log('Tie!');
    }else if((lowercase === 'rock' && computerSelection === 'paper') || 
    (lowercase === 'scissors' && computerSelection === 'rock') || (lowercase === 'paper' && computerSelection === 'scissors')){
        console.log(`You Lose! ${computerSelection} beats ${lowercase}`);
    }else{
        console.log(`You Win! ${lowercase} beats ${computerSelection}`);
    }
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
}

game();
