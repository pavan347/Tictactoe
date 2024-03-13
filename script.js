let reset = document.getElementById("reset");
let boxes = document.getElementsByClassName("box");
let modal = document.getElementById("modal");
let turn = document.getElementById("turn");
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let win = false;
const checkWinner = ()=>{
    let winner;
    for (const pattern of winPatterns) {
        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;
        if(box1 != "" && box2 != "" && box3 != ""){
            if( box1 == box2 && box2 == box3){
                winner = box1;
                modal.firstElementChild.firstElementChild.innerText = `${winner}`;
                modal.style.display = "flex";
                win = true;
            }
        }
    }
}

let chance = 0;
for (const box of boxes) {
    box.addEventListener("click", () => {
        chance++;
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            turn.innerText = "X's turn"; 
        } else {
            box.innerText = "X";
            turnO = true;
            turn.innerText = "O's turn";
        }
        box.disabled = true;
        checkWinner();
        console.log(chance);
        if(chance == 9 && win == false){
            turn.innerText = "It's a draw🙆‍♂️ try again!";
        }
    });
}

const resetBoxes = ()=>{
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    turnO = true;
    turn.innerText = "O's turn";
    chance = 0;
    win = false;
}

reset.addEventListener("click",()=>{
   resetBoxes();
});

modal.addEventListener("click", ()=>{
    modal.style.display = "none";
    resetBoxes();
});

