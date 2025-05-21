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

function playGame (){
    let j = 1;

    const playRound = function(humanChoice, computerChoice) {
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
            return `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}!`;
        }
    }

    while (j<=5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        j += 1;
    }
    
    if (computerScore > humanScore) {
        return `Awwn, you're the overall loser. You lost ${computerScore} to ${humanScore}. Why not try again?`
    } else if (humanScore > computerScore) {
        return `Yippee! You're the overrall winner. You won ${humanScore} to ${computerScore}! Play again and assert your dominance!`
    } else {
        return "It was a draw...odd. We can't leave it like that, can we? Play again."
    }
}

console.log(playGame());


