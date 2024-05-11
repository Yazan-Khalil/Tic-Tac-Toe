import { useState } from 'react';
import { turn } from './App';
import { stop } from './App';
import { grid } from './App';
import { isGameOver } from './utilities';
import { endGame } from './utilities';

function Square(props) {
    const [color, setColor] = useState('white');
    const [blocked, setBlocked] = useState('false');
    return (
        <td><button
            style={{ backgroundColor: color }}
            onClick={() => {
                if (blocked === 'false' && stop[0] === 0) {
                    turn[0]++;
                    let player;
                    if (turn[0] % 2 === 1) {
                        player = 1;
                        setColor('red');
                    }
                    else {
                        player = 2;
                        setColor('blue');
                    }

                    setBlocked('true');
                    grid[Number(props.id)] = player;
                }
                let winner = isGameOver();
                if (winner !== 0)
                    endGame(winner);
            }
            }
        ></button></td>
    );
}

export default Square;