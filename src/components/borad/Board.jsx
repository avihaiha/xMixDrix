import React from "react";
import './Borad.css';

function Board() {
    let isXturn = true;
    let numberOfClicks = 0;
    

    function click(e){
        if (numberOfClicks == 9){
            return;
        };
        
        if(e.target.innerText != ""){
            return;
        };


        numberOfClicks++;
        e.target.innerText = (isXturn)? "X":"O";
        isXturn = !isXturn;
    };

    let cells = [];

    for (var i = 0; i < 9; i++) {
        cells.push(<div key={i} className="grid-cell" onClick={click}></div>);
    }

    return (
        <div className="grid-container">
            {cells}
        </div>
    )
};



export default Board;
