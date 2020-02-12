import React from 'react';
import MainSignIn from './MainSignIn';
import NavigationBar from './NavigationBar';
import BottomLord from './BottomLord';

function Header(){

  return (
    <div className="header-body">
      <style jsx>{`
          .header-body {
            background-image: url('https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
          }

            `}</style>
      <NavigationBar/>
      <MainSignIn/>
      <BottomLord/>
    </div>
  );
}

export default Header;
