import React from "react";
import './Borad.css';
import Cell from "./Cell";

function Board() {
    let borad = [
        null,null,null,
        null,null,null,
        null,null,null
    ];

    let isXturn = true;
    let numberOfClicks = 0;

    function updateBoard(index){
        if (numberOfClicks == 9){
            return;
        };
        
        if(borad[index] !== null){
            return;
        };

        numberOfClicks++;
        borad[index] = (isXturn)? "X":"O";
        isXturn = !isXturn;

        console.log(borad);

        return borad[index];
    };

    return (
        <div className="grid-container">
            {borad.map((value, index) => (<Cell key={index} updateBoard={() => updateBoard(index)} value={value} />))}
        </div>
    );
};



export default Board;
