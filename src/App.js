  import React from 'react';
  import Button from './button'; // Perhatikan huruf besar pada 'Button'
  import Logo from './logo';
  // import { data } from './Data';
  import logo from './Data_img/image_1.png';

  function App() {
    const handleClick = () => {
      alert("Button has been clicked");
    };

    return (
      <div id='nav_menu' className='col-8'>
        <div id='nav_menu_logo'>
          <Logo img={logo} />
        </div> 
        <div id='nav_menu_item'>
          <Button name='WELCOME' onClick={handleClick} />
          <Button name='HOME' onClick={handleClick} />
          <Button name='ABOUT' onClick={handleClick} />
          <Button name='CONTACT' onClick={handleClick} />
          <Button name='PROJECT' onClick={handleClick} />
        </div>
      </div>
    );
  }

  export default App;
