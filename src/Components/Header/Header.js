import React, { Component } from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import HeaderButton from '../Buttons/HeaderButton';

const Header = ({openSettings}) => {
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
        	/>
        </div>
      </div>
    );
}

export default Header;
