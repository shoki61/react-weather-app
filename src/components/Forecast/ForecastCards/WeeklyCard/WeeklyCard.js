import React from 'react';
import { BsFillDropletFill } from 'react-icons/bs';
import { FiWind } from 'react-icons/fi';
import { IoIosCloud, IoMdTimer } from 'react-icons/io';
import { HiSun, HiMoon } from 'react-icons/hi';


import './WeeklyCard.css';
import img from '../../../../assets/icons/10d.png';


const styles = {
    fontSize:17,
    marginRight:7
};

const DNIconStyle={
    fontSize: 25,
    marginRight: 5
};

const weeklyCard = props => {
    const date = new Date(props.date * 1000).toLocaleDateString();
    const dayTemp = Math.round(props.temp.day - 273.15);
    const nightTemp = Math.round(props.temp.night - 273.15);
    const windSpeed = Math.round(props.wind * 3.6);
    return (
        <div className='Weekly-Card'>
            <div className='Date'>
                <p>{date}</p>
            </div>
            <div className='Weekly-Forecast'>
                <img src={img} alt='img'/>
                <div className='DN-Forecast'>
                    <div className='DN-Temp'>
                        <HiSun style={{...DNIconStyle, color: '#ff9100'}}/>
                        <p>{dayTemp}°C</p>
                    </div>
                    <div className='DN-Temp'>
                        <HiMoon style={{...DNIconStyle, color: '#fff'}}/>
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
