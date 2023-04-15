import React, { createContext, useContext } from "react";
import './style.css';
const themeDefault={border:`10px solid green`};
const themeContext=createContext(themeDefault);

export default function ContextStudy(){
    const theme=useContext(themeContext);
return(
    <div className="root" style={theme}>
        <h1>컨텍스트 공부!
            <Sub1/>
        </h1>
    </div>
);
}

function Sub1(){
    const theme=useContext(themeContext);
    return(
        <themeContext.Provider value={{border:'10px solid pink'}}>
        <div style={theme}>
            <h1>sub1</h1>
            <Sub2/>
        </div>
        </themeContext.Provider>
    );
}
function Sub2(){
    const theme=useContext(themeContext);
    return(
        <div style={theme}>
            <h1>sub2</h1>
            <Sub3/>
        </div>
    );
}
function Sub3(){
    const theme=useContext(themeContext);
    return(
        <div style={theme}>
            <h1>sub3</h1>
        </div>
    );
}