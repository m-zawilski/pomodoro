import React from 'react';
import './SettingsView.css';
import HeaderButton from '../Buttons/HeaderButton';
import Slider from '../Slider/Slider';

const SettingsView = ( {settings, changeValue, saveSettings} ) => {
    const settingsMinutes = settings.map((value) => {
        return Math.floor(value/60);
    });
    return (
        <div className='settingsView' onClick={(event) => event.stopPropagation()}>
            <div>
                <Slider
                    name='Pomodoro'
                    number={0}
                    value={settingsMinutes[0]}
                    changeValue={changeValue(0)}
                />
                <Slider
                    name='Short Break'
                    number={1}
                    value={settingsMinutes[1]}
                    changeValue={changeValue(1)}
                />
                <Slider
                    name='Long Break'
                    number={2}
                    value={settingsMinutes[2]}
                    changeValue={changeValue(2)}
                />
            </div>
            <HeaderButton
                buttonType='Accept'
                onClick={saveSettings}
            />
        </div>
    );
}

export default SettingsView;
