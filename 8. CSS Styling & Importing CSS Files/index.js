import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "jhanvi";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/300/300";
const img3 = "https://picsum.photos/400/300";
const links = "https://www.google.com/";
//camel case eg. jhanviLadiwal

//use className instead of class
ReactDOM.render(
  <>
    <h1 className="heading">My name is {name}</h1>

    <div className="img_div">
      <img src={img1} alt='randomimage' />
      <img src={img2} alt='randomimage' />
      <a href={links} target="_google">
        <img src={img3} alt='randomimage' />
      </a>
    </div>


  </>
  ,
  document.getElementById('root')
);
