import React from "react";
import ConfirmDialog from "./ConfirmDialog";

function ConfirmDialogs(props){
    return(
        <div>
            <ConfirmDialog>내용</ConfirmDialog><br/><br/>
            <ConfirmDialog>설명</ConfirmDialog><br/><br/>
            <ConfirmDialog>전공</ConfirmDialog><br/><br/>
        </div>
    )
}

export default ConfirmDialogs;