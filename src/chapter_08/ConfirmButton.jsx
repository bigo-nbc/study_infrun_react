import React, { useState } from "react";

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const handleConfirm = () => {
        setIsConfirmed(
            (beforeIsConfirmed) => !beforeIsConfirmed
        );
    };

    return (
        <button 
            onClick={handleConfirm}
            // disabled={isConfirmed}
        > 
            {isConfirmed ? "확인됨": "확인안됨"}
        </button>
    );
};


export default ConfirmButton;