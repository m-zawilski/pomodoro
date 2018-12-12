import React from 'react';
import './PomodoroBreakBar.css';
import BigButton from '../../UI/Buttons/BigButton';

const PomodoroBreakBar = ({changeMode, settings}) => {
    return (
      <div className='PomodoroBreakBar'>
        	<BigButton 
        		buttonType='Pomodoro'
        		changeMode={changeMode}
                value={0}
        	/>
        	<BigButton 
        		buttonType='Short Break'
        		changeMode={changeMode}
                value={1}
        	/>
        	<BigButton 
        		buttonType='Long Break'
        		changeMode={changeMode}
                value={2}
        	/>
      </div>
    );
}

export default PomodoroBreakBar;
