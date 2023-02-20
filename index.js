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