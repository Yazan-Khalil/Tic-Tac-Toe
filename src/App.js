import './App.css';
import Grid from './Grid.js';

export const turn = [0];
export const stop = [0];
export const grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function App() {

    document.title = "Tic-Tac-Toe";
    document.body.style.padding = 0;
    return (
        <div>
            <div className="image"></div>
            <div className="main">
                <p id="winner"></p>
                <button id="reset">Reset</button>
                <Grid />
            </div>
        </div>
    );
}

export default App;
