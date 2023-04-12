import React,{useState} from "react";

function Toggle(props){
    const[isToggleOn,setIsToggleOn]=useState(true);

    function handleClick(){
        setIsToggleOn((isToggleOn)=>!isToggleOn);
    }
    // const handleClick2=()=>{
    //     setIsToggleOn((isToggleOn)=>!isToggleOn);
    // }
    return(
        <div>
            <button onClick={handleClick}>{isToggleOn?"켜짐":"꺼짐"}</button>
        </div>
    );
}
export default Toggle;