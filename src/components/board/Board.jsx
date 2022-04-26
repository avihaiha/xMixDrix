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

    
   
 
    function updateBoard(index){
        if (numberOfClicks === 9){
            return;
        };
        
        if(board[index] !== null){
            return;
        };
    
        setNumberOfClicks(numberOfClicks + 1);
        board[index] = (isXturn)? "X":"O";
        


        if(board[0] && board[0] === board[1] && board[1] === board[2]) {
          console.log(board[0] + ' win');
           
        }
        else if(board[3] && board[3] === board[4] && board[4] === board[5]) {
            console.log(board[3] + ' win');
            
        }
        else if(board[6] && board[6] === board[7] && board[7] === board[8]) {
            console.log(board[6] + ' win');
            
        }
        else if(board[0] && board[0] === board[4] && board[4] === board[8]) {
            console.log(board[0] + ' win');
       
        }
        else if(board[2] && board[2] === board[4] && board[4] === board[6]) {
            console.log(board[2] + ' win');
        }
        else if(board[0] && board[0] === board[3] && board[3] === board[6]) {
            console.log(board[0] + ' win');
        }
        else if(board[1] && board[1] === board[4] && board[4] === board[7]) {
            console.log(board[1] + ' win');
        }
         else if(board[2] && board[2] === board[5] && board[5] === board[8]) {
            console.log(board[0] + ' win');
        } 
        else if (numberOfClicks > 7){
            console.log("Drow");
        }
        setIsXturn(!isXturn);
        return board[index];

    }

    return ( 
        <div>
            <Heading isXturn ={isXturn}  numberOfClicks ={numberOfClicks} board={board} />
            <div className="grid-container">
                {board.map((value, index) => (<Cell key={index} updateBoard={() => updateBoard(index)} value={value} />))}
            </div>
        </div>
    );
};



export default Board;
