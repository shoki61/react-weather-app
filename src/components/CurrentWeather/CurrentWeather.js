import React  from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa'



import './CurrentWeather.css';
import Button from '../Buttons/Button/Button';

import img from '../../assets/icons/11n.png';

const currentWeather = props =>  (
    <div className='Current-Weather-Card'>
        <p className='City-Name'>{props.locationName}</p>
        <div className='Weather-Status'>
            <img src={img} alt='img'/>
            <p className='Temp'>25°C</p>
        </div>
        <div className='Weather-Details'>
            <div className='Details'>
                <p>Pressure: </p>
                <p>Humidity:</p>
            </div>
            <div className='Details'>
                <p>Wind:</p>
                <p>Clouds:</p>
            </div>
        </div>
        <Button btnType='Add'>
            {/*<FaRegStar/>*/}
            <FaStar/>
        </Button>
    </div>
);

export default currentWeather;
