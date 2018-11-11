import React, { Component } from 'react';
import './PlayPauseBar.css';
import SmallButton from '../Buttons/SmallButton';

const PlayPauseBar =  ({play, pause, reset}) => {
    return (
      <div className='PlayPauseBar'>
      	<SmallButton 
      		buttonType='reset'
      		onClick={reset}
      	/>
      	<SmallButton 
      		buttonType='play'
    			onClick={play}
    		/>
      	<SmallButton 
      		buttonType='pause'
      		onClick={pause}
      	/>
      </div>
    );
}

export default PlayPauseBar;
