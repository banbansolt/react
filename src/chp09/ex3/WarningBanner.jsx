import React from "react";
import './MainPage_style.css';
function WarningBanner(props){
    if(!props.warning){
        return null;
    }else{
        return(
            <div className={"warning-banner"}>경고!!!</div>
        );
    }
}
export default WarningBanner;