import React, {useState} from "react";
import LoginButton from "./LoginButton";
import UserGreeting from "../ex1/Greeting";

function LoginControl(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogInClick = () =>{
        setIsLoggedIn(true)
    }

    const handleLogoutClick = () =>{
        setIsLoggedIn(false)
    }


    let btn;

    if (isLoggedIn){
        btn = <LoginButton onClick={handleLogoutClick}/>
    }else{
        btn = <LoginButton onClick={handleLogInClick}/>
    }
    return(
        <div>
            <UserGreeting isLoggedIn={{isLoggedIn}}/>
            {btn}
        </div>
    );
}

export default LoginControl;