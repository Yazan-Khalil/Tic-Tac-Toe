import { useState } from "react";
import {turn} from "./App";

function Square() {

    const [color, setColor] = useState('white');
    const [blocked, setBlocked] = useState('false');

    return (
        <td><button
            style = {{backgroundColor: color}}
            onClick = {() => {
                    if(blocked === 'false') {
                        turn[0]++;
                        if(turn[0] % 2 === 1)
                            setColor('red');
                        else
                            setColor('blue');
                        setBlocked('true');
                    }
                }
            }
        ></button></td>
    );
}

export default Square;