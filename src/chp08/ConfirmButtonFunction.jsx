import React, {useState} from "react";

function ConfirmButtonFunction() {
    const [isConfirmed, setIsConfirmed] = useState(false);

    function handleConfirm() {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed)
    }

    return(
        <div>
            ConfirmButton Test Function Type
            <button onClick={handleConfirm} disabled={isConfirmed}>{isConfirmed ? "Confirmed" : "Check"}</button>
        </div>
    );
}

export default ConfirmButtonFunction;