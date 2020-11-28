import React  from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa'


import './CurrentWeather.css';
import Button from '../Buttons/Button/Button';
import Spinner from '../Spinner/Spinner';

import img from '../../assets/icons/11n.png';


const currentWeather = props => {
    return (
        <div className='Current-Weather-Card'>
            {props.currentData
                ? <div>
                    <p className='City-Name'>{props.locationName}</p>
                    <div className='Weather-Status'>
                        <div className='Time'>
                            <p>{new Date(props.currentData.dt * 1000).toLocaleTimeString().slice(0, -3)}</p>
                        </div>
                        <img src={img} alt='icon'/>
                        <p className='Temp'>{Math.round(props.currentData.temp - 273.15)}°C</p>
                    </div>
                    <div className='Weather-Details'>
                        <div className='Details'>
                            <p>Humidity: %{props.currentData.humidity}</p>
                            <p>Pressure: {props.currentData.pressure} hPa</p>
                        </div>
                        <div className='Details'>
                            <p>Wind: {Math.round(props.currentData.wind_speed * 3.6)} km/h</p>
                            <p>Clouds: %{props.currentData.clouds}</p>
                        </div>
                    </div>
                    <Button btnType='Add'>
                        <FaRegStar/>
                        {/*<FaStar/>*/}
                    </Button>
                </div>
                : <Spinner/>
            }
        </div>
    )
};

export default currentWeather;
