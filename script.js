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

let computerSelection = getComputerChoice();
let playerSelection = prompt('Rock, Paper or Scissors');
console.log(playerSelection);

function playRound(playerSelection,computerSelection){
    let lowercase = playerSelection.toLowerCase();
    console.log(lowercase);
    
    if(lowercase === computerSelection){
        return 'Tie!';
    }else if((lowercase === 'rock' && computerSelection === 'paper') || 
    (lowercase === 'scissors' && computerSelection === 'rock') || (lowercase === 'paper' && computerSelection === 'scissors')){
        return `You Lose! ${computerSelection} beats ${lowercase}`;
    }else{
        return `You Win! ${lowercase} beats ${computerSelection}`;
    }
}

console.log(playRound(playerSelection,computerSelection));
