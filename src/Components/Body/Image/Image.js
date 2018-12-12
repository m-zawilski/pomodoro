import React from 'react';
import './Image.css';

const Image = ({currentMode, clock}) => {
    return clock ? 
    	(
        <div className='image'>
            <img 
            	alt='Funny tomato' 
            	src={`./img/middleImage${currentMode}.png`}
                style={{'width': 'auto',
                        'height': '200px'}}
            />
        </div>
        ) 
        : 
    	(
        <div className='image'>
        	<img 
            	alt='Funny tomato' 
            	src={`./img/timeEnd.png`}
                style={{'width': 'auto',
                        'height': '200px'}}
            />
        </div>
    	)
}

export default Image;
