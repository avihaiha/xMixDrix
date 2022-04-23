import React from "react";
import './Board.css';
import Cell from "./Cell";

function Board() {
    let board = [
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
        
        if(board[index] !== null){
            return;
        };

        numberOfClicks++;
        board[index] = (isXturn)? "X":"O";
        isXturn = !isXturn;

     

        if(board[0,2] == "X" || board[3,5] == "X" || board[6,8] == "X" || board[0,4,8]  == "X" || board[2,4,6] == "X" || board[2,5,8] == "X" || board[0,3,6] == "X" || board[1,4,7] == "X"){
            console.log("X win!");
            return;
        }

        if(board[0,2] == "O" || board[3,5] == "O" || board[6,8] == "O" || board[0,4,8]  == "O" || board[2,4,6] == "O" || board[2,5,8] == "O" || board[0,3,6] == "O" || board[1,4,7] == "O"){
            console.log("O win!");
        } else{
            console.log("Draw");
        }

        return board[index];
    };


    return (
        <div className="grid-container">
            {board.map((value, index) => (<Cell key={index} updateBoard={() => updateBoard(index)} value={value} />))}
        </div>
    );
};



export default Board;
