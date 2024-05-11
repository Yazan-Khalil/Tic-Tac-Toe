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
            <div className="mainn">
                <h1 id="h1"><span class="star">&#9733;</span>Welcome to our (Tic-Tac-Toe) Game!<span class="star">&#9733;</span></h1>
                <h1 id="h11"><span className='span'>=&gt;&nbsp;</span>
                    Let's get started:</h1>
                <br />
                <br />
                <br />
                <button id="reset" onClick = {() => {window.location.reload();}}>Reset</button>
            </div>
            <div className="main">
                <p id="text"><span id="winner"></span><span id="wins"></span></p>
                <Grid />
            </div>

        </div>
    );
}

export default App;
