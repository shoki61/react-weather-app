import React  from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa'



import './CurrentWeather.css';
import Button from '../Buttons/Button/Button';

import img from '../../assets/icons/11n.png';


const currentWeather = props =>  (
    <div className='Current-Weather-Card'>
        <p className='City-Name'>{props.locationName}</p>
        <div className='Weather-Status'>
            <img src={img} alt='icon'/>
        </div>
        <div className='Weather-Details'>
            <div className='Details'>
                <p>Humidity: %{props.currentData.humidity}</p>
                <p>Pressure: {props.currentData.pressure}</p>
            </div>
            <div className='Details'>
                <p>Wind: {props.currentData.wind_speek}</p>
                <p>Clouds: %{props.currentData.clouds}</p>
            </div>
        </div>
        <Button btnType='Add'>
            {/*<FaRegStar/>*/}
            <FaStar/>
        </Button>
    </div>
);

export default currentWeather;
