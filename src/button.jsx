import React from 'react';

function Button(props){
    return(
        <button onClick={props.onClick} id={props.id}>
            <p>{props.name}</p>
        </button>
    )
}

export default Button;

