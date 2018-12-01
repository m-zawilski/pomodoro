import React from 'react';
import './HeaderButton.css';

const HeaderButton = ({buttonType, onClick, settings}) => {
    return (
      	<button 
      		className='headerButton' 
      		type='button'
      		onClick={onClick}
      		value={settings}
      		>
      			{buttonType}
      		</button>
    );
}

export default HeaderButton;
