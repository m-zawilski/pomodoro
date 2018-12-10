import React from 'react';
import './Logo.css';

const Logo =  () => {
    return (
      <div className='logoContainer'>
      	<a href='.'>
      	<img alt='Logo' src='./img/Logo.svg' className='logoImage'/>
      	</a>
      </div>
    );
}

export default Logo;
