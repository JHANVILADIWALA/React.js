import React from 'react';
import ReactDOM from 'react-dom';
import './index.css' 

// let currdate = new Date();
// let currdate = new Date(year,month,date,hour,minute,sec);
let currdate=new Date(2023,2,10,2);
currdate = currdate.getHours();

//inline CSS
const csstyle = {
  //  color : 'green'
 } ;


let greeting='';
if(currdate>=1 && currdate<12){
  greeting='Good Morning'
  csstyle.color = 'green'
}
else if(currdate>=12 && currdate<19){
  greeting='Good Afternoon'
  csstyle.color = 'orange'
}
else{
  greeting='Good Night'
  csstyle.color = 'black'
}

ReactDOM.render( 
  <>
  <div>
     <h1> Hello Sir/Mam, <span style={csstyle}>{greeting}</span> </h1>
  </div>
  </>
  ,
  document.getElementById('root')
);
