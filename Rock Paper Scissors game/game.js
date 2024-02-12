const playertext = document.getElementById("playertext");
const computertext = document.getElementById("computertext");
const resulttext = document.getElementById("resulttext");
const choicebtns = document.querySelectorAll(".choicebtn");

let player;
let computer;
let result;

choicebtns.forEach(button => button.addEventListener("click", () =>{
player = button.textContent;

computerTurn();
playertext.textContent = `Player : ${player}`;
computertext.textContent = `Computer : ${computer}`;
resulttext.textContent =  checkWinner();

}));

// console.log(resulttext)
function computerTurn(){
    const randomNum = Math.floor(Math.random() * 3) + 1;

    switch (randomNum) {
        case 1:
            computer = "Rock"
            break;
            case 2:
                computer = "Paper"
                break;
                case 3:
                    computer = "Scissors"
                    break;
    
        default:
            break;
    }
}

// function checkWinner(){
//     if(player == computer){
//         return "Draw!";
//     }
//     else if(computer == "Rock"){
//         return (player == "Paper") ? "you win" : "you Lose"
//     }
//     else if(computer == "Paper"){
//         return (player == "Scissors") ? "you win" : "you Lose"
//     }
//     else if(computer == "Scissors"){
//         return (player == "Rock") ? "you win" : "you Lose"
//     }
// }

function checkWinner() {
    if (player == computer) {
        return "Draw!";
    } else if (computer == "Rock") {
        return (player == "Paper") ? "You win" : "You lose";
    } else if (computer == "Paper") {
        return (player == "Scissors") ? "You win" : "You lose";
    } else if (computer == "Scissors") {
        return (player == "Rock") ? "You win" : "You lose";
    }
     
}

