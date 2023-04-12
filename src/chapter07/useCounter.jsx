import {useState} from "react";

function useCounter(initiaValue){
    const [count,setCount]=useState(initiaValue);

    const increaseCount=()=>setCount((count)=>count+1);
    const decreaseCount=()=>setCount((count)=>Math.max(count-1,0)); // Math.max는 안의 입력값 중 가장 큰것을 반환

    return [count,increaseCount,decreaseCount];
}

export default useCounter;