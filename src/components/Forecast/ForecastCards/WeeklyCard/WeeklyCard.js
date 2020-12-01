import React from 'react';
import { BsFillDropletFill } from 'react-icons/bs';
import { FiWind } from 'react-icons/fi';
import { IoIosCloud, IoMdTimer } from 'react-icons/io';
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';


import './WeeklyCard.css';
import img from '../../../../assets/icons/10d.png';


const styles = {
    fontSize:17,
    marginRight:7
};

const DNIconStyle={
    fontSize: 23,
    marginRight: 10
};

const weeklyCard = props => {
    const date = new Date(props.date * 1000).toLocaleDateString();
    const dayTemp = Math.round(props.temp.day - 273.15);
    const nightTemp = Math.round(props.temp.night - 273.15);
    const windSpeed = Math.round(props.wind * 3.6);
    return (
        <div className='Weekly-Card'>
            <div >
                <p className='Date'>{date}</p>
                <p className='Weekly-Condition'>{props.weather[0].main}</p>
            </div>
            <div className='Weekly-Forecast'>
                <img src={img} alt='img'/>
                <div className='DN-Forecast'>
                    <div className='DN-Temp'>
                        <FaTemperatureHigh style={{...DNIconStyle, color: '#ff860a'}}/>
                        <p>{dayTemp}°C</p>
                    </div>
                    <div className='DN-Temp'>
                        <FaTemperatureLow style={{...DNIconStyle, color: '#23b2ff'}}/>
                        <p>{nightTemp}°C</p>
                    </div>
                </div>

            </div>
            <div className='Weekly-Details'>
                <p><BsFillDropletFill style={{color: '#00a2ff', ...styles}}/> %{props.humidity}</p>
                <p><IoMdTimer style={{color: '#ff6f00', ...styles}}/> {props.pressure} hPa</p>
                <p><FiWind style={{...styles}}/> {windSpeed} km/h</p>
                <p><IoIosCloud style={{...styles}}/> %{props.clouds}</p>
            </div>
        </div>
    )
};

export default weeklyCard;
