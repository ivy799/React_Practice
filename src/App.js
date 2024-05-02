import React from 'react';
import Button from './button';


function App(){
  const handleClick = () => { // Definisikan fungsi handleClick sebagai fungsi arrow
    alert("added to cart...!");
  };

  return(
    <Button name='banana' onClick={handleClick}/>
  )
}

export default App;
