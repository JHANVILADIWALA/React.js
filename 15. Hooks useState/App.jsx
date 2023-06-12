import React, { useState } from "react";

const App = () => {
    const state = useState();
    // current data,updated data = initial
    //using aray destructing
    const [count , setCount] = useState(5);

    const IncNum = () => {
        setCount(count+1);
        console.log('clicked' + count);
    }
    
    return (
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={IncNum}>Click me</button>
            </div>
        </>
    );
};
export default App;
