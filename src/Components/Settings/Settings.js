import React from 'react';
import './Settings.css';
import SettingsView from './SettingsView';

const Settings = ( {isSettings, cancelSettings, settings, changeValue, saveSettings} ) => {
    if (isSettings){
    	return (
	      <div className='settingsModal on' onClick={cancelSettings}>
	       	<SettingsView
                settings={settings}
                changeValue={changeValue}
                saveSettings={saveSettings}
	      	/>
	      </div>
    	);
    } else {
    	return (
	      <div className='settingsModal off'>
          </div>
    	)
    }
}

export default Settings;
