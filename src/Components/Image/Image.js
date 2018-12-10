import React from 'react';
import './Image.css';

const Image = ({currentMode, clock}) => {
    return clock ? 
    		(
        <div className='image'>
            <img 
            	alt='Funny tomato' 
            	src={`./img/middleImage${currentMode}.svg`}
            	height='200px' 
            	width='200px'
            />
        </div>
        ) 
        : 
    		(
        <div className='image'>
        	<img 
            	alt='Funny tomato' 
            	src={`./img/timeEnd.svg`}
            	height='200px' 
            	width='200px'
            />
        </div>
    		)
}

export default Image;
