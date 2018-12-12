import React from 'react';
import SettingsView from './View';
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
