  import React from 'react';
  import Button from './button';
  import Logo from './logo';
  import logo from './Data_img/image_1.png';

  function App() {
    const handleClick = () => {
      alert("Button has been clicked");
    };
  
    function night() {
      const button1 = document.getElementById("nav_nightButton_1");
      const button2 = document.getElementById("nav_nightButton_2");
    
      button1.addEventListener("click", function() {
        button1.style.backgroundColor = "white";
        button1.style.color = "black";
      });
      button2.addEventListener("click", function() {
        button2.style.backgroundColor = "black";
        button2.style.color = "white";
      });
    }

    function light() {
      const button1 = document.getElementById("nav_nightButton_1");
      const button2 = document.getElementById("nav_nightButton_2");
    
      button1.addEventListener("click", function() {
        button1.style.backgroundColor = "black";
        button1.style.color = "white";
      });
      button2.addEventListener("click", function() {
        button2.style.backgroundColor = "white";
        button2.style.color = "black";
      });
    }
    

    return (
      <div id='container-1'>
          <div id='nav_menu' className='col-8'>
            <div id='nav_menu_logo'>
              <Logo img={logo} />
            </div> 
            <div id='nav_menu_item'>
              <Button name='WELCOME' onClick={handleClick} id='' />
              <Button name='HOME' onClick={handleClick} id='' />
              <Button name='ABOUT' onClick={handleClick} id='' />
              <Button name='CONTACT' onClick={handleClick} id='' />
              <Button name='PROJECT' onClick={handleClick} id='' />
            </div>
        </div>
        <div id='nav_nightButton' className='col-4'>
            <div id='button_wrapper'>
              <Button name='NG' onClick={night} id='nav_nightButton_1' />
              <Button name='LG' onClick={light} id='nav_nightButton_2' />
            </div>
        </div>
      </div>
    );
  }

  export default App;
