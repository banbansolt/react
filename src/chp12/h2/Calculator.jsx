import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";
import BoilVerdict from "../ex1/BoilVerdict";
import './Calculator.css'


function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output = Math.round(convert(input)*1000) / 1000;
    return output.toString();
}

function toCelsius(fahrenheit){
    return ((fahrenheit - 32) * 5) / 9; //F => C로 변경하는 수식
}

function toFahrenheit(celsius){
    return celsius * 9 / 5 + 32;
}

function Calculator() {
    const[temperature, setTemperature] = useState("");
    const[scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    }

    const celsius = scale === "c" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "f" ? tryConvert(temperature, toFahrenheit) : temperature;


    return(
        <div className="Calculator">

            <div className="temperature-converter-box">
                <TemperatureInput scale={"c"} temperature={celsius} onTemperatureChange={handleCelsiusChange}/>
                <TemperatureInput scale={"f"} temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange}/>
            </div>
            <BoilVerdict celsius={parseFloat(celsius)}/>
        </div>
    );
}

export default Calculator;