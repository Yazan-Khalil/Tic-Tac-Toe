import { grid } from './App';
import { stop } from './App';

function check(a, b, c) {
    if (grid[a] === grid[b] && grid[a] === grid[c])
        return grid[a];
    else
        return 0;
}

function max(a, b) {
    return (a > b) ? a : b;
}

export function isGameOver() {
    let res = 0;

    res = max(res, check(0, 1, 2));
    res = max(res, check(3, 4, 5));
    res = max(res, check(6, 7, 8));
    res = max(res, check(0, 3, 6));
    res = max(res, check(1, 4, 7));
    res = max(res, check(2, 5, 8));
    res = max(res, check(0, 4, 8));
    res = max(res, check(2, 4, 6));

    let draw = 3;
    for (let i = 0; i < 9; i++) {
        if (grid[i] === 0)
            draw = 0;
    }
    if (draw !== 0 && res === 0)
        return draw;

    return res;
}

export function endGame(winner) {

    if (winner === 1)
        winner = "RED";
    else if (winner === 2)
        winner = "BLUE";
    else
        winner = "Draw";
    let color;
    if(winner === "RED")
        color = "red";
    if(winner === "BLUE")    
        color = "blue";
    document.getElementById('winner').style.color = color;  
    document.getElementById('winner').innerHTML = winner;
    let second = "wins!";
    if(winner === "Draw")
        second = "&#128546";
    document.getElementById('wins').innerHTML = second;
    stop[0] = 1;
    document.getElementById('reset').innerHTML = "Play Again?";

}
