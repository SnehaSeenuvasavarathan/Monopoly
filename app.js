let board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
const player1_Button = document.getElementById('player-1');
console.log(player1_Button);
const player2_Button = document.getElementById('player-2');
console.log(player2_Button);

player1_Button.addEventListener('click', rollDice_1, true);
player2_Button.addEventListener('click', rollDice_1, true);


var player1 = ["Prograd", 0, 1000];
var player2 = ["Face", 0, 1000];

function rollDice_1() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player 1 rolls", position);
    changePosition_1(player1[1], position);
}

function changePosition_1(old, currentpos) {
    var newPosition = old + currentpos;
    player1[1] = newPosition;
    console.log(player1[1]);
    updateMoney_1(player1[1]);
}

function updateMoney_1(p1) {
    var updateMoney = 0;
    if (p1 < board.length)
        updateMoney = player1[2] - board[p1 - 1];
    else { p1 = p1 % 15; updateMoney = player1[2] - board[p1 - 1]; }
    console.log(updateMoney);
}


function rollDice_2() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player 2 rolls", position);
    changePosition_1(player2[1], position);
}

function changePosition_2(old, currentpos) {
    var newPosition = old + currentpos;
    player2[1] = newPosition;
    console.log(player2[1]);
    updateMoney_1(player2[1]);
}

function updateMoney_2(p1) {
    var updateMoney = 0;
    if (p1 < board.length)
        updateMoney = player2[2] - board[p1 - 1];
    else { p1 = p1 % 15; updateMoney = player1[2] - board[p1 - 1]; }
    console.log(updateMoney);
}