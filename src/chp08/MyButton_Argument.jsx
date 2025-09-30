import React from "react";


function MyButton_Argument() {
    const handleClick = (num, event) => {
        console.log(num , event.target);
    };

    return (
        <div align="center" style={{ margin: 200 }}>
            <button onClick={(event) => {
                    handleClick(7, event);
                }}>Argument 전달</button>
        </div>
    );
}

export default MyButton_Argument;