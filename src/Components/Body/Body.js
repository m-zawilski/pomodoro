import React from 'react';
import './Body.css';
import Timer from '../Timer/Timer';
import PlayPauseBar from '../PlayPauseBar/PlayPauseBar';
import PomodoroBreakBar from '../PomodoroBreakBar/PomodoroBreakBar';
import Image from '../Image/Image';

const Body = ({clock, play, pause, reset, changeMode, settings, currentMode}) => {
    return (
      	<div className="body">
      		<PomodoroBreakBar
            changeMode={changeMode}
            settings={settings}
          />
          <Image
            currentMode={currentMode}
            clock={clock}
          />
      		<Timer
	        	clock={clock}
        	/>
      		<PlayPauseBar 
      			play={play}
            pause={pause}
            reset={reset}
      		/>
      	</div>
    );
}

export default Body;
