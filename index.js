function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // make it case-sensitive 
    playerSelection = playerSelection.toLowercase

    //tie
    if (playerSelection === computerSelection) {
        return "It is a tie!";
    }else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 1; i <= 5; i++) {
      const playerSelection = prompt(`Round ${i}: Enter Rock, Paper, or Scissors`);
      const computerSelection = getComputerChoice();
  
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.includes('win')) {
        playerScore++;
      } else if (result.includes('lose')) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log(`You win the game! Final score: ${playerScore} - ${computerScore}`);
    } else if (computerScore > playerScore) {
      console.log(`You lose the game! Final score: ${playerScore} - ${computerScore}`);
    } else {
      console.log(`It's a tie! Final score: ${playerScore} - ${computerScore}`);
    }
  }
  