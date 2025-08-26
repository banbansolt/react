import React from "react";
import './Button.css';

function Button(props) {
    // props.color에 따라 클래스명 결정
    const className = `bg-${props.color}`;

    return (
        <button className={className}>
            <b>{props.children}</b>
        </button>
    );
}

export default Button;