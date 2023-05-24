import React from 'react';

import ReactDOM from 'react-dom';

//React fragments : to prevent extra div creation in html root
//which might affect css
//use React.Fragment or nothing instead of div
//faster than div ...better

ReactDOM.render(
  <>
    <h1>Hello</h1>
    <p>world</p>
    <h2>Welcome to react :) </h2>
  </>
  , document.getElementById("root"));
