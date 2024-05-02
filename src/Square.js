import { useState } from "react";
import {turn} from "./App";

function Square() {

    const [color, setColor] = useState('white');
    let blocked = false;

    return (
        <td><button
            style = {{backgroundColor: color}}
            onClick = {() => {
                    if(!blocked) {
                        turn[0]++;
                        if(turn[0] % 2 === 1)
                            setColor('red');
                        else
                            setColor('blue');
                        blocked = true;
                    }
                }
            }
        ></button></td>
    );
}

export default Square;