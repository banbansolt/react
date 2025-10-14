import React, {useState} from "react";
import WarningBanner from "./WarningBanner";

function MainPageWarning(){
    const [showWarining, setShowWarning]= useState(false);

    const handleToggleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning)
    }
    return(
        <div>
            <WarningBanner warning = {showWarining}/>
            <button onClick = {handleToggleClick} className={`toggle-button ${showWarining ? 'hide' : ''}`}>
                {showWarining ? '감추기' : '보이기'}
            </button>
        </div>
    )
}

export default MainPageWarning