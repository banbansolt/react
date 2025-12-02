import React from "react";
import Dialog from "./Dialog";
import './WelcomDialog.css'

function WelcomeDialog(props) {
    return (
        <Dialog
            title="어서 오세요"
            message="우리 사이트에 방문하신 것을 환영합니다!"
        />
    );
}
export default WelcomeDialog;