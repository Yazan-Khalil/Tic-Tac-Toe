import Square from './Square';

function Grid() {
    return (
        <table>
            <tr>
                <Square id='0'/>
                <Square id='1'/>
                <Square id='2'/>
            </tr>
            <tr>
                <Square id='3'/>
                <Square id='4'/>
                <Square id='5'/>
            </tr>
            <tr>
                <Square id='6'/>
                <Square id='7'/>
                <Square id='8'/>
            </tr>
        </table>
    );
}

export default Grid;