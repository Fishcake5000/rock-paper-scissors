function random(number) { //Returns an integer n such that 0<=n<number
    return Math.floor(Math.random()*number);
}

function computerPlay() {
    let possibleMoves = ['Rock', 'Paper', 'Scissors'];
    return possibleMoves[random(3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); //normalise the case for user
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'Rock':
                    return`Tie! You both chose Rock!`;
                    break;
                case 'Paper':
                    computerScore ++;
                    return`You lose! Paper beats Rock`;
                    break;
                case 'Scissors':
                    playerScore ++;
                    return`You win! Rock beats Scissors`;
                    break;
            }
            break;
        case 'paper':
            switch (computerSelection) {
                case 'Rock':
                    playerScore ++;
                    return`You win! Paper beats Rock`;
                    break;
                case 'Paper':
                    return`Tie! You both chose Paper!`;
                     break;
                case 'Scissors':
                    computerScore ++;
                    return`You lose! Scissors beat Paper`;
                    break;
            }
            break;
        case 'scissors':
            switch (computerSelection) {
                case 'Rock':
                    computerScore ++;
                    return`You lose! Rock beats Scissors`;
                    break;
                case 'Paper':
                    playerScore ++;
                    return`You win! Scissors beat Paper`;
                     break;
                case 'Scissors':
                    return`Tie! You both chose Scissors!`;
                    break;
            }
            break;
        default:
            return `Invalid choice, please enter rock, paper, or scissors`;
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    while (playerScore + computerScore < 5) {
        console.log( playRound(prompt('Choose rock, paper, or scissors'), computerPlay()) );
    }
    console.log((playerScore > computerScore) ? 'You win!' : 'You lose, better luck next time');
    console.log(`You won ${playerScore} round${(playerScore===1) ? '' : 's'} the computer won ${computerScore}`);
}

let playerScore;
let computerScore;
game();