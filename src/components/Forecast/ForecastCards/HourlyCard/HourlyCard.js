import React from 'react';
import { BsFillDropletFill } from 'react-icons/bs';
import { FiWind } from 'react-icons/fi';
import { IoIosCloud, IoMdTimer } from 'react-icons/io';

import './HourlyCard.css';


const styles = {
    fontSize:18,
    marginRight:3
};


const hourlyCard = props => {
    const time = new Date(props.time * 1000).toLocaleTimeString().slice(0, -3);
    const temp = Math.round(props.temp - 273.15);
    const windSpeed = Math.round(props.wind * 3.6);
    return(
        <div className='Hourly-Card'>
            <div className='Hour-Forecast-Container'>
                <div className='Hour'>
                    <p>{time}</p>
                </div>
                <div className='Hourly-Forecast'>
                    <img src={require(`../../../../../src/assets/icons/${props.weather[0].icon}.png`).default} alt='img'/>
                    <div className='An-Hour-Forecast'>
                        <p className='Hour-Temp'>{temp}°C</p>
                        <p>{props.weather[0].main}</p>
                    </div>
                </div>
            </div>
            <div className='Hourly-Details'>
                <div>
                    <p><BsFillDropletFill style={{color: '#00a2ff', ...styles}}/> %{props.humidity}</p>
                    <p><IoMdTimer style={{color: '#ff6f00', ...styles}}/> {props.pressure} hPa</p>
                </div>
                <div>
                    <p><FiWind style={{...styles}}/> {windSpeed} km/h</p>
                    <p><IoIosCloud style={{...styles}}/> %{props.clouds}</p>
                </div>
            </div>
        </div>
    )
};

export default hourlyCard;
