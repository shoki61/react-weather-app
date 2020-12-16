import React from 'react';
import { IoMdRemoveCircleOutline } from 'react-icons/io';

import './Favorites.css';
import Button from '../../components/Buttons/Button/Button';


const favorites = props =>  (
    <div className='Favorites-Card'>
        <div className='City-Info-Container' onClick={props.showFavoriteWeather}>
            <div>
                <p className='City'>{props.name}</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={require(`../../../src/assets/icons/${props.icon}.png`).default} alt='img'/>
                <p className='Temperature'>{props.temp}°C</p>
            </div>
        </div>
        <Button clicked={props.clicked} btnType='Remove'>
            <IoMdRemoveCircleOutline/>
        </Button>
    </div>
)

export default favorites;
