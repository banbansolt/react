import React from "react";

const unitNames = {
    km: "킬로미터",
    mile: "마일"
};

function DistanceInput(props) {
    const handleChange = (event) =>{
        props.onDistanceChange(event.target.value);
    };

    return(
        <div className={"inputField"}>
            <legend>
                {unitNames[props.unit]} 입력:
            </legend>
            <input type={"text"}  value={props.distance} placeholder={`${unitNames[props.unit]}를 입력하세요.`}
                   onChange={handleChange}/>
        </div>
    );
}

export default DistanceInput;