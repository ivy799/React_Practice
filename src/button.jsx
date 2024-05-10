import React from 'react';

function Button(props){
    return(
        <a onClick={props.onClick}>
            <p>{props.name}</p>
        </a>
    )
}

export default Button;

