import React, {useState} from "react";


function Heading (props){   
    const [headingText, setHeadingText] = useState();

    const xTurn = "X turn";
    const oTurn = "O turn";
    const drow = "Drow! lets play again!"
    
   

    if(props.winner){
       if(headingText != props.winner){
        setHeadingText(props.winner);
       }
    }
    else if(props.isXturn && headingText != xTurn){
        setHeadingText(xTurn) 
    } 
    else if (!props.isXturn && headingText != oTurn ){
        setHeadingText(oTurn)
    } else if (props.winner){
        if(headingText != drow){
            setHeadingText(drow);
        }
    }
    
   

    






    return (
        <div>
            <h1>{headingText}</h1>
        </div>
    );
    
};

export default Heading;