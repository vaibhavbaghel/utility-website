// Click Sound
let Click = new Audio("click.mp3");

let pressArray = document.querySelectorAll(".press");
Array.from(pressArray).forEach(e => {
    e.addEventListener("click", function(){
        Click.play();
    })
})





// calculations algorithm

let string = "";
let buttons = document.querySelectorAll(".col");

Array.from(buttons).forEach(col=> {
    col.addEventListener("click", function(e){
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector(".screen").innerHTML = "<strong>" + string + "</strong>";
        }
        else {
            console.log(e.target. innerHTML)
            string = string + e.target.innerHTML;
            document.querySelector(".screen").innerHTML = "<strong>" + string + "</strong>";
        }
    })
})





// pressing AC Function
document.querySelector(".left").addEventListener("click", function(){
    document.querySelector(".screen").innerHTML = "<strong>ENTER NO.</strong>";
    string = "";
})