import React, {useState} from "react";

function ToggleFunction() {
    const[isToggleOn, setIsToggleOn] = useState(true);

    // 1. Handler를 함수로 정의
    // function handleClick() {
    //     setIsToggleOn((isToggleOn) => !isToggleOn);
    // }

    // 2. 상수를 선언하고 상수에 익명함수 구현한 것을 대입해서 사용
    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    return(
        <div align="center" style={{margin: 200}}>
            <button onClick={handleClick}>
                Function Type2 Component: {isToggleOn ? "On": "Off"}
            </button>
        </div>
    );

}

export default ToggleFunction;