import React from 'react';
import './AcceptButton.css';

const AcceptButton = ({buttonType, onClick, settings}) => {
    return (
      	<button 
      		className='acceptButton' 
      		type='button'
      		onClick={onClick}
      		value={settings}
      		>
      			{buttonType}
      		</button>
    );
}

export default AcceptButton;