import React  from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa'


import './CurrentWeather.css';
import Button from '../Buttons/Button/Button';
import Spinner from '../Spinner/Spinner';

import img from '../../assets/icons/11n.png';


const currentWeather = props => {
    const temp = Math.round(props.currentData.temp - 273.15);
    const windSpeed = Math.round(props.currentData.wind_speed * 3.6);
    return (
        <div className='Current-Weather-Card'>
            {props.currentData
                ? <div>
                    <p className='City-Name'>{props.locationName}</p>
                    <div className='Weather-Status'>
                        <img src={img} alt='icon'/>
                        <p className='Temp'>{temp}°C</p>
                    </div>
                    <div className='Weather-Details'>
                        <div className='Details'>
                            <p>Humidity: %{props.currentData.humidity}</p>
                            <p>Pressure: {props.currentData.pressure} hPa</p>
                        </div>
                        <div className='Details'>
                            <p>Wind: {windSpeed} km/h</p>
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
