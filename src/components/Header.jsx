import React from 'react';
import MainSignIn from './MainSignIn';
import NavigationBar from './NavigationBar';
import BottomLord from './BottomLord';

function Header(){

  return (
    <div>
      <NavigationBar/>
      <MainSignIn/>
      <BottomLord/>
    </div>
  );
}

export default Header;
