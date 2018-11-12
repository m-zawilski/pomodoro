import React, { Component } from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import BigButton from '../Buttons/BigButton';

const Header =  () => {
    return (
      <div className='header'>
        <Logo/ >
        <div className='rightButtons'>
        	<BigButton buttonType='Settings'/ >
        	<BigButton buttonType='About'/ >
        </div>
      </div>
    );
}

export default Header;
