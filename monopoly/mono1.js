var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
console.log(board);
const player1_button = document.getElementById('player1');
console.log(player_1);
var player2_button = document.getElementById('player2');
console.log(player_2);

player1_button.addEventListener('click', rollDice_1);

var player1 = ["ProGrad", 0, 1000];
var player2 = ["FACEprep", 0, 1000];

function rollDice_1() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log(position);
    changePos1(player1[1], position);
}
function changePos1(old, currentPos) {
    var newPos = old + currentPos;
    player1[1] = newPos;
    console.log(player1[1]);
    updateMoney1(player1[1]);
}
function updateMoney1(p1) {
    var updateMoney = 0;
    if (pl < board.length)
        updateMoney = player1[2] - board[p1 - 1];
    else {
        p1 = p1 % 15;
        updateMoney = player1[2] - board[p1 - 1];
    }
    console.log(updateMoney);
}

