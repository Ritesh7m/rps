let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg");
const us=document.querySelector("#user");
const cc=document.querySelector("#comp");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoise = choice.getAttribute("id");
        playGame(userChoise);
    });
});

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    console.log(randIdx);
};

const drawGame = () => {
    msg.innerText = "Game was Draw Play again."
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoise, compChoise) => {
    if (userWin === true) {
        userScore++;
        us.innerText=userScore;
        msg.innerText = `You win! ${userChoise} beats ${compChoise}`;
         msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        cc.innerText=compScore;
        msg.innerText = `you loss! ${compChoise} beats ${userChoise}`
        msg.style.backgroundColor = "Red";
    }
};

const playGame = (userChoise) => {
    const compChoise = genCompChoice();
    if (userChoise === compChoise) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoise === "rock") {
            userWin = compChoise === "paper" ? false : true;
        }
        else if (userChoise === "paper") {
            userWin = compChoise === "scissors" ? false: true;
        }
        else {
            userWin = compChoise === "rock" ? false : true;
        }
        showWinner(userWin, userChoise, compChoise);
    }

};

