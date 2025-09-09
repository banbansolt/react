import React from "react";

function Clock(props) {
    return(
        <div>
            <div className='clock'>{new Date().toLocaleTimeString()}</div>
        </div>
    )
}

export default Clock;