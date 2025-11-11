import React, {useState} from "react";
import BoilVerdict from "./BoilVerdict";

function ConfirmBoilVerdict(){
    const[temperature,setTemperature]=useState("");

    const handleTemperature =(event)=>{
        setTemperature(event.target.value);
    }

    return(
        <fieldset>
            <legend>섭씨 온도를 입력하세요</legend>
            <input value={temperature} /*value에는 state 값이 들어감*/ onChange=/*handelTemperature도 가능*/{(event)=>{
                setTemperature(event.target.value);
            }}/>
            <BoilVerdict celsius={parseInt(temperature)}></BoilVerdict>
        </fieldset>
    );
}

export default ConfirmBoilVerdict;