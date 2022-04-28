import React, {useState} from "react";
import './Board.css';
import Cell from "./Cell";
import Heading from "../Heading";

function Board() {

     const[board, setBoard] = useState([
        null,null,null,
        null,null,null,
        null,null,null
    ]);
     
    const [isXturn, setIsXturn] = useState(true);
    const [numberOfClicks, setNumberOfClicks]= useState(0);
    const [winner, setWinner] = useState(false);
   
 
    function updateBoard(index){

        if (numberOfClicks === 9){
            return; 
        };
        
        if(board[index] !== null){
            return;
        };

        if (winner) {
            return;
        };

        setNumberOfClicks(numberOfClicks + 1);
        board[index] = (isXturn)? "X":"O";
        
        if(board[0] && board[0] === board[1] && board[1] === board[2]) {
            setWinner(board[0] + ' win'); 
        }
        else if(board[3] && board[3] === board[4] && board[4] === board[5]) {
            setWinner(board[3] + ' win');
        }
        else if(board[6] && board[6] === board[7] && board[7] === board[8]) {
            setWinner(board[6] + ' win');
        }
        else if(board[0] && board[0] === board[4] && board[4] === board[8]) {
            setWinner(board[0] + ' win');
        }
        else if(board[2] && board[2] === board[4] && board[4] === board[6]) {
            setWinner(board[2] + ' win');
        }
        else if(board[0] && board[0] === board[3] && board[3] === board[6]) {
            setWinner(board[0] + ' win');
        }
        else if(board[1] && board[1] === board[4] && board[4] === board[7]) {
            setWinner(board[1] + ' win');
        }
         else if(board[2] && board[2] === board[5] && board[5] === board[8]) {
            setWinner(board[2] + ' win');
        } 
        else if (numberOfClicks > 7){
            setWinner("Drow! lets play again!");
        }

        setIsXturn(!isXturn);
        return(board[index]);
    }

    function resetBoard(){
       setBoard([
            null,null,null,
            null,null,null,
            null,null,null
        ]);
        setNumberOfClicks(0);
        setWinner(false);
       setIsXturn(true);
    };

    return ( 
        <div>
            <Heading isXturn ={isXturn}  numberOfClicks ={numberOfClicks} winner= {winner} />
            <div className="grid-container">
                {board.map((value, index) => (<Cell key={index} updateBoard={() => updateBoard(index)} value={value} />))}
            </div>
            <button onClick={resetBoard}>Restart</button>
        </div>
    );
};



export default Board;
