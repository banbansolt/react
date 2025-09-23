import React, {useEffect, useState} from "react";
import useCounter from "./useCounter";

const  MAX_Count = 10;

function Accomdate(props){
    const [isFull, setIsFull] = useState(false)
    const [count, increaseCount, decreaseCount] = useCounter(0);//Custom useState

    useEffect(() => {
        console.log("===================");
        console.log("useEffect( is Full is called");
        console.log(`isFull: ${isFull}`)
    });
    useEffect(() => {
        setIsFull(count >= MAX_Count);
        console.log(`Current count value: ${count}`)
    },   [count]);

    return(
        <div style={{padding: 20}}>
            <p>{`총 ${count}명을 수용했습니다`}</p>
            <button onClick={increaseCount} disabled={isFull} style={{marginRight: 10}}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{color:"red"}}>수용할수있는정원이 가득찼습니다</p>}
        </div>
    );
}

export default Accomdate;