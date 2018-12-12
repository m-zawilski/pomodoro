import React from 'react';
import './Header.css';
import Logo from './Logo/Logo';
import HeaderButton from '../UI/Buttons/HeaderButton';

const Header = ({openSettings, openAbout}) => {
    return (
      <div className='header'>
        <Logo/>
        <div className='rightButtons'>
        	<HeaderButton 
        		buttonType='Settings'
        		onClick={openSettings}
        	/>
        	<HeaderButton 
        		buttonType='About'
                onClick={openAbout}
        	/>
        </div>
      </div>
    );
}

export default Header;
