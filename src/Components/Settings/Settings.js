import React, { Component } from 'react';
import './Settings.css';
import SettingsView from './SettingsView';

const Settings = ({isSettings, closeSettings, saveSettings, test}) => {
  	if (isSettings){
    	return (
	      <div className='settingsModal on' onClick={closeSettings}>
	      	<SettingsView
	      		closeSettings={closeSettings}
                saveSettings={saveSettings}
                test={test}
	      	/>
	      </div>
    	);
    } else {
    	return (
	      <div className='settingsModal off'>
            <SettingsView
                closeSettings={closeSettings}
                saveSettings={saveSettings}
                test={test}
            />
          </div>
    	)
    }
}

export default Settings;
