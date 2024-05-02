import React from 'react';

function Button(props){
    return(
        <a onClick={props.onClick}>
            <h1>{props.name}</h1>
        </a>
    )
}

export default Button;

