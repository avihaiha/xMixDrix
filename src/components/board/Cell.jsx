import React, { useState } from "react";
import './Board.css';

function Cell(props) {
    const [value, setValue] = useState(props.value);

    function click(event) {
        let newValue = props.updateBoard();

        if (!newValue) {
            return;
        }

        setValue(newValue);
    }

    return (
        <div className="grid-cell" onClick={click}>{value}</div>
    );
};

export default Cell;
