import React from 'react';
import ReactDOM from 'react-dom';
// import fruit,{prog,color} from './App' //pass variable   ....or..
import * as temp from './App'; //as object

ReactDOM.render(
    <>
        {/* <ol>
        <li>Jhanvi</li>
        <li>{fruit}</li>
        <li>{prog}</li>
        <li>{color()}</li>
      </ol> */}

        <ol>
            <li>Jhanvi</li>
            <li>{ temp.default}</li>
            <li>{ temp.prog}</li>
            <li>{ temp.color()}</li>
        </ol>
    </>,
    document.getElementById('root')
);
