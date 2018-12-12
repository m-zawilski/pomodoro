import React from 'react';
import './View.css';
import AcceptButton from '../../UI/Buttons/AcceptButton';
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
                    className='slider'
                    maxValue='60'
                    minValue='10'
                    step='5'
                />
                <Slider
                    name='Short Break'
                    number={1}
                    value={settingsMinutes[1]}
                    changeValue={changeValue(1)}
                    className='slider'
                    maxValue='15'
                    minValue='1'
                    step='1'
                />
                <Slider
                    name='Long Break'
                    number={2}
                    value={settingsMinutes[2]}
                    changeValue={changeValue(2)}
                    className='slider'
                    maxValue='45'
                    minValue='5'
                    step='5'
                />
            </div>
            <AcceptButton
                buttonType='Accept'
                onClick={saveSettings}
            />
        </div>
    );
}

export default SettingsView;
