const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
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
    

    const capitalizeFirstLetter = (selection) => {
        
        const split = selection.split('');
        const upperCase = split[0].toUpperCase();
        const slice = split.slice(1);
        slice.unshift(upperCase)
        
        return slice.join('') 
    }

    const playerSelectionCapitalized = capitalizeFirstLetter(playerSelection);
    const computerSelectionCapitalized = capitalizeFirstLetter(computerSelection);

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
   
     
    if(playerSelection === computerSelection){
        message.innerText ='Tie!'
        playerScoreDisplay.innerText = `${playerScore}`
        computerScoreDisplay.innerText = `${computerScore}`
    }else if((playerSelection === 'rock' && computerSelection === 'paper') || 
    (playerSelection === 'scissors' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'scissors')){
        message.innerText = `You Lose! ${computerSelectionCapitalized} Beats ${playerSelectionCapitalized}`
        computerScore += 1
        playerScoreDisplay.innerText = `${playerScore}`
        computerScoreDisplay.innerText = `${computerScore}`
    }else{
        message.innerText = `You Win! ${playerSelectionCapitalized} Beats ${computerSelectionCapitalized}`;
        playerScore += 1
        playerScoreDisplay.innerText = `${playerScore}`
        computerScoreDisplay.innerText = `${computerScore}`
    }


}

function getChoice(event) {
    playerSelection = event.target.dataset.button;
    let computerSelection = getComputerChoice();

    playRound(playerSelection,computerSelection);  
}

rock.addEventListener('click',getChoice);
paper.addEventListener('click',getChoice);
scissors.addEventListener('click',getChoice);


