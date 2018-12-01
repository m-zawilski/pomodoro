import React from 'react';
import './Settings.css';
import SettingsView from './SettingsView';
import Modal from '../Modal/Modal';

const Settings = ( {isSettings, cancelSettings, settings, changeValue, saveSettings} ) => {
    if (isSettings){
    	return (
	      <Modal close={cancelSettings}>
	       	<SettingsView
                settings={settings}
                changeValue={changeValue}
                saveSettings={saveSettings}
	      	/>
	      </Modal>
    	);
    } else {
    	return (
	      null
    	)
    }
}

export default Settings;
