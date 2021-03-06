import React from 'react';
import './Timer.css';

const Timer = ({clock}) => {
	const clockMinutes = (Math.floor(clock/60)).toString().padStart(2, '0');
	const clockSeconds = (clock%60).toString().padStart(2, '0');
    return (
      <div className='timer'>
      	{`${clockMinutes[0]}${clockMinutes[1]}:` +
      	`${clockSeconds[0]}${clockSeconds[1]}`}
      </div>
      )
}

export default Timer;
