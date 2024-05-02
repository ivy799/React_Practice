import React from 'react';
import Button from './button';


function App(){
  const handleClick = () => { 
    alert("Button has been clicked");
  };

  return(
    <div id='nav_menu_item'>
      <Button name='Home' onClick={handleClick} />
      <Button name='About' onClick={handleClick} />
      <Button name='Contact' onClick={handleClick} />
    </div>
    
  )
}

export default App;
