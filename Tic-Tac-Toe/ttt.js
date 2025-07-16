let ting = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

let turn = "X";
let over = false;


// Function to change turn
const changeTurn = function (){
    return turn === "X"? "O" : "X"
}


// Function to check for a win
const checkWin = function (){
    let XorO = document.getElementsByClassName("box-text");
    let boxes = document.getElementsByClassName("box");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach(e => {
        if( (XorO[e[0]].innerText === XorO[e[1]].innerText) && (XorO[e[0]].innerText === XorO[e[2]].innerText) && (XorO[e[0]].innerText !== "") ){

            boxes[e[0]].classList.add("boxwin");
            boxes[e[1]].classList.add("boxwin");
            boxes[e[2]].classList.add("boxwin");
            document.querySelector(".info").innerText = XorO[e[0]].innerText + " won !"
            gameover.play()
            over = true;
        }
    })
}

//Function for a draw
let touchCount = 0;
let boxes = document.getElementsByClassName("box");
const drawgame = () => {
    document.querySelector(".info").innerText = "It's a draw";
    for(i=0; i<9; i++){
        boxes[i].classList.add("disabled");
    }

}

//Game Logic
Array.from(boxes).forEach(Element => {
    let boxText = Element.querySelector(".box-text");
    Element.addEventListener("click", function(){
        touchCount++;
        if (boxText.innerText === ""){
            boxText.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if (over === false){
                document.getElementsByClassName("info")[0].innerText ="Turn for " + turn;

                if(touchCount === 9){
                    drawgame();
                }
            }
            else {
                for(i=0; i<9; i++){
                    boxes[i].classList.add("disabled");
                }
            }
        }
    })
})


// Reload button
document.querySelector(".restart").addEventListener("click", function(){
    location.reload();
})
