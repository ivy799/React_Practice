import React from 'react';

function Button(props){
    return(
        <button onClick = {props.onClick}>
            <h1>{props.name}</h1>
        </button>
    )
}

export default Button;

