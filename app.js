const p1button = document.querySelector("#p1button");
const p2button = document.querySelector("#p2button");
const p1Display = document.querySelector("#p1Display")
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const playToSelect = document.querySelector("#playTo");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOVer = false;

p1button.addEventListener("click", function () {
    if(!isGameOVer){
        p1Score += 1;
        if(p1Score === winningScore) {
            isGameOVer = true;
            p1button.disabled = true;
            p2button.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
})

p2button.addEventListener("click", function () {
    if(!isGameOVer){
        p2Score += 1;
        if(p2Score === winningScore) {
            isGameOVer = true;
            p1button.disabled = true;
            p2button.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
})

playToSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener("click", reset);

function reset() {
    p1Score = 0;
    p1Display.textContent = p1Score;
    p1button.disabled = false;
    p2Score = 0;
    p2Display.textContent = p2Score;
    p2button.disabled = false;
    isGameOVer = false
}