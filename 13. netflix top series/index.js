import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import "./index.css";

ReactDOM.render(
    <>
    <Card imgsrc="https://wallpaperaccess.com/full/1510470.jpg" title="A Netflix Original Series"
    sname='DARK'
    link = "https://www.netflix.com/in/title/80100172"
    />
    <Card imgsrc="https://e1.pxfuel.com/desktop-wallpaper/694/720/desktop-wallpaper-new-korean-netflix-original-extracurricular-to-premiere-on-april-29-extracurricular-netflix.jpg" title="A Netflix Original Series"
    sname='EXTRACURRICULAR'
    link = "https://www.netflix.com/in/title/80990668"
    />
    <Card imgsrc="https://wallpapers.com/images/featured/dkttxahzpl44tbsa.jpg"
    title="A Netflix Original Series"
    sname='STRANGER THINGS'
    link = "https://www.netflix.com/in/title/80057281"
    />
    </>

    ,
    document.getElementById('root'));
