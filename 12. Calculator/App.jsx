import React from 'react';
import {add,sub,mul,div} from './Calc';

function App(){
    return (
        <>
            <ul>
                Simple Calculator:
                <li>Sum: {add(40, 4)}</li>
                <li>Diff: {sub(40, 4)}</li>
                <li>Multiply: {mul(40, 4)}</li>
                <li>Divide: {div(40, 4)}</li>
            </ul>
        </>
    );
}

export default App;
