let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const compinput = Math.floor(Math.random() * 3);
    if (compinput === 0) {
        return "rock";
    } else if (compinput === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

document.getElementById('rock').addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

document.getElementById('paper').addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

document.getElementById('scissors').addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});

function playRound(HumanChoice, ComputerChoice) {
    if (HumanChoice === ComputerChoice) {
        console.log("It's a tie!");
        return;
    }
    if (
        (HumanChoice === "rock" && ComputerChoice === "scissors") ||
        (HumanChoice === "scissors" && ComputerChoice === "paper") ||
        (HumanChoice === "paper" && ComputerChoice === "rock")
    ) {
        humanScore++;
        console.log("Congrats! You won🎉");
    } else {
        computerScore++;
        console.log("You LOST");
    }
}



console.log(`Final Scores - You: ${humanScore}, Computer: ${computerScore}`);

if (
    humanScore > computerScore) {
    console.log("that's my boy you're qualified for olympics");
}
else {
    console.log("don't cry come on let's have another round (i can do this all day)")
}
