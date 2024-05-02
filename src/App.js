import React from 'react';
import Button from './button';


function App(){
  const handleClick = () => { 
    alert("added to cart...!");
  };

  return(
    <Button name='banana' onClick={handleClick}/>
  )
}

export default App;
