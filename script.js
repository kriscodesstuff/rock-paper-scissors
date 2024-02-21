const rock = document.querySelector('.rock-button');
const paper = document.querySelector('.paper-button');
const scissors = document.querySelector('.scissors-button');
const div = document.querySelector('div');
const message = document.querySelector('#message');
const playerScoreDisplay = document.querySelector('#player-display');
const computerScoreDisplay = document.querySelector('#computer-display')


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



let playerScore = 0;
let computerScore = 0;




function playRound(playerSelection,computerSelection){

    

    let lowercase = playerSelection.toLowerCase();

    if(computerScore == 5 && playerScore < 5){
            message.innerText = 'Computer wins!'
            return
          }else if(playerScore == 5 && computerScore < 5){
            message.innerText = 'Player wins!'
            return
          }else if(playerScore == 5 && computerScore == 5){
            message.innerText = 'It\'s a tie!'
            return
          }
   
     
    if(lowercase === computerSelection){
        message.innerText ='Tie!'
        playerScoreDisplay.innerText = `${playerScore}`
        computerScoreDisplay.innerText = `${computerScore}`
    }else if((lowercase === 'rock' && computerSelection === 'paper') || 
    (lowercase === 'scissors' && computerSelection === 'rock') || (lowercase === 'paper' && computerSelection === 'scissors')){
        message.innerText = `You Lose! ${computerSelection} beats ${lowercase}`
        computerScore += 1
        playerScoreDisplay.innerText = `${playerScore}`
        computerScoreDisplay.innerText = `${computerScore}`
    }else{
        message.innerText = `You Win! ${lowercase} beats ${computerSelection}`;
        playerScore += 1
        playerScoreDisplay.innerText = `${playerScore}`
        computerScoreDisplay.innerText = `${computerScore}`
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


