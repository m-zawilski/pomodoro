import React from 'react';
import './Modal.css';

const Modal = ( props ) => {
    return (
    	<div className='modal on' onClick={props.close}>
    		{props.children}
    	</div>
    )
}

export default Modal;
