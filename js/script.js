"use strict";

let reset = document.createElement('button');
let h2 = document.createElement('h2');
h2.style.color = 'green';
h2.style.fontSize = '40px';
h2.style.margin = '20px';
let x = 'X';
let o = 'O';
let click = 1;
let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

reset.type = 'button';
reset.textContent = 'Reset';
reset.setAttribute('class', 'reset');
document.body.appendChild(reset);

let div = document.createElement('div');
div.setAttribute('class', 'block');


for (let i = 0; i < 9; i++) {
    let btn = document.createElement('button');
    btn.setAttribute('class', 'btn');
    div.appendChild(btn);
}
document.body.prepend(div);
document.body.prepend(h2);

let btns = document.querySelectorAll('.btn');
for (let btn of btns) {
    btn.addEventListener('click', function () {
        click++;
        if (click % 2 === 0) {
            this.textContent = 'X';
            this.disabled = true;
        }else{
            this.textContent = 'O';
            this.disabled = true;
        }
        winner();
    })
}

function winner() {
    if (click == 10) {
        h2.innerHTML = 'Draw';
    }
    for (let k = 0; k < win.length; k++) {
        if (btns[win[k][0]].textContent == x &&
            btns[win[k][1]].textContent == x &&
            btns[win[k][2]].textContent == x) {
                h2.innerHTML = 'Player X: Congratulations: You Win!';
            }else if (btns[win[k][0]].textContent == o &&
                btns[win[k][1]].textContent == o &&
                btns[win[k][2]].textContent == o) {
                    h2.innerHTML = 'Player O: Congratulations: You Win!';
            }
    }
};

function removeBtn() {
    for (let btn of btns) {
        btn.disabled = true;
    }
}

reset.addEventListener('click', function () {
    h2.innerHTML = '';
    click = 1;
    for (let btn of btns) {
        btn.innerHTML = '';
        btn.disabled = false;
    }
});

let header = document.createElement('h1');
header.textContent = 'X O Game';
header.style.color = 'rgb(13, 95, 13)';
header.style.fontSize = '30px';
header.style.margin = '20px';
document.body.insertBefore(header, document.body.firstChild);
