import React from "react";
// import Button from "./Button";
import ConfirmDialog from "./ConfirmDialog"

function ConfirmDialogs() {
    return(
        <div className='div-bg-seashell'>
            <ConfirmDialog color='ivory'>내용</ConfirmDialog>
            <ConfirmDialog color='yellow'>설명</ConfirmDialog>
            <ConfirmDialog color='khaki'>전공</ConfirmDialog>
        </div>
    )
}

export default ConfirmDialogs;