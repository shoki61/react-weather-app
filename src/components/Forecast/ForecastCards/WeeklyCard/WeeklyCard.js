import React from 'react';

import './HourlyCard.css';

const weeklyCard = props => (
    <div className='Weekly-Card'>
        <div className='Date'>
            <p>18:00</p>
        </div>
        <div className='Weekly-Forecast'>
            <div className='Day'>
                <img/>
                <div className='Day-Forecast'>
                    <p>25C</p>
                    <p>Rain</p>
                </div>
            </div>
            <div className='Night'>
                <img/>
                <div className='Night-Forecast'>
                    <p>25C</p>
                    <p>Rain</p>
                </div>
            </div>
        </div>
        <div className='Weekly-Details'>
            <p>Humidity</p>
            <p>Press</p>
            <p>Speed</p>
            <p>lorem</p>
            <p>lorem</p>
        </div>
    </div>
);

export default weeklyCard;
