import React from 'react';
import './PomodoroBreakBar.css';
import BigButton from '../Buttons/BigButton';

const PomodoroBreakBar = ({changeMode, settings}) => {
    return (
      <div className='PomodoroBreakBar'>
        	<BigButton 
        		buttonType='Pomodoro'
        		changeTime={changeMode}
                value={0}
                color='dark'
        	/>
        	<BigButton 
        		buttonType='Short Break'
        		changeTime={changeMode}
                value={1}
                color='light'
        	/>
        	<BigButton 
        		buttonType='Long Break'
                number={2}
        		changeTime={changeMode}
                value={2}
                color='dark'
        	/>
      </div>
    );
}

export default PomodoroBreakBar;
