const cMove = document.querySelector("#computer-move");
const pMove = document.querySelector("#player-move");
const cScoreDisplay = document.querySelector("#computer-score-display");
const pScoreDisplay = document.querySelector("#player-score-display");
const resultDisplay = document.querySelector("#result");

const buttons = document.querySelectorAll(".select");

const GUESS = ["rock", "paper", "scissors"];
var playerChoice, computerChoice;
var pScore = 0, cScore = 0;

const winConditions = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
};

function makeGuess() {
    return GUESS[Math.floor(Math.random()* Math.floor(3))];
}

function startGame() {
    computerChoice = makeGuess();

    cMove.textContent = "Computer move: " + computerChoice;
    pMove.textContent = "Player move: " + playerChoice;
    
    if (playerChoice == computerChoice) {
        resultDisplay.textContent = "Result: Draw!";
    } else if (winConditions[playerChoice] == computerChoice) {
        resultDisplay.textContent = "Result: Player wins!";
        pScore++;
    } else {
        resultDisplay.textContent = "Result: Computer wins!";
        cScore++;
    }

    cScoreDisplay.textContent = "Computer score:" + cScore;
    pScoreDisplay.textContent = "Player score: " + pScore;

    if (pScore == 5 || cScore == 5) {
        if (pScore > cScore) { alert("Player won!"); }
        else { alert("Computer won!"); }
        window.location.replace("game.html");
    }
}

buttons.forEach(
    (button) => {
        button.addEventListener(
            "click", () => {
                playerChoice = button.getAttribute("id");
                startGame();
            }
        )
    }
);


