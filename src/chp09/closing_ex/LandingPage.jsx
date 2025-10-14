import React, {useState} from "react";
import Toolbar from "./Toolbar";
import "./toolbar.css"

function LandingPage(){
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const onClickLogin = () => {
        setIsLoggedIn(true)
    }

    const onClickLogout = () => {
        setIsLoggedIn(false)
    }

    return(
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}/>
            <h2>동해물과 백두산이 마르고 닳도록</h2>
        </div>
    )
}

export default LandingPage;