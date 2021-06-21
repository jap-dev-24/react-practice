import React from "react";

const userInput = (props) => {

 const   style ={
        borderColor:'orange',
        font: 'inherit'
    }
  return <input style = {style} type="text" onChange={props.changed} value={props.currentName}></input>;
};

export default userInput;
