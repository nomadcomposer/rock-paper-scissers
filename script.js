let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let num = Math.floor(Math.random() * 100);
    if (num < 34) {
        return 'rock';
    } else if (num < 67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice () {
    let choice = prompt('Select "rock", "paper", or "scissors" ');
    return choice;
}

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    if (humanChoice === computerChoice) {
        return `It's a draw! You both chose ${computerChoice.toUpperCase()}`;
    } else if ((humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'rock' && computerChoice === 'scissors')) {
        humanScore += 1;
        return `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}!`;
    } else {
        computerScore += 1;
        return `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}!`
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
