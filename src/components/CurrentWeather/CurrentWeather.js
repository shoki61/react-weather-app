import React, { Component } from 'react';


import './CurrentWeather.css';

import img from '../../assets/icons/02d.png';

class CurrentWeather extends Component{
    render(){
        return(
            <div className='Current-Weather-Card'>
                <p>Trabzon / TR</p>
                <div className='Weather-Status'>
                    <img src={img} alt='img'/>
                    <p>25C</p>
                </div>
                <div className='Weather-Details'>
                    <div>
                        <p>Pressure: </p>
                        <p>Humidity:</p>
                    </div>
                    <div>
                        <p>Wind:</p>
                        <p>Clouds:</p>
                    </div>
                </div>
            </div>
        );
    };
};

export default CurrentWeather;
