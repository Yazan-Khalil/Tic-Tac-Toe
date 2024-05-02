import './App.css';
import Grid from './Grid.js';

export const turn = [0];
export const stop = [0];
export const grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function App() {

    document.title = "Tic-Tac-Toe";
    return (
        <div className="main">
            <p id="winner"></p>
            <Grid />
        </div>

    );
}

export default App;
