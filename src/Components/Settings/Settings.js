import React, { Component } from 'react';
import './Settings.css';
import SettingsView from './SettingsView';

const Settings = ({isSettings, closeSettings, test}) => {
  	if (isSettings){
    	return (
	      <div className='settingsModal on' onClick={closeSettings}>
	      	<SettingsView
	      		closeSettings={closeSettings}
                test={test}
	      	/>
	      </div>
    	);
    } else {
    	return (
	      <div className='settingsModal off'></div>
    	)
    }
}

export default Settings;
