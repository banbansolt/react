 import React from "react";
import "./toolbar.css";

function Toolbar(props){
    const {isLoggeIn, onClickLogin, onClickLogout} = props;

    return(
        <div className={"wrapper"}>
            {isLoggeIn && <span className={"greeting"}>환영합니다.</span>}
            {isLoggeIn ? (<button onClick={onClickLogout}>로그아웃</button>) : (<button onClick={onClickLogin}>로그인</button>)}
        </div>
    )
}

export default Toolbar;