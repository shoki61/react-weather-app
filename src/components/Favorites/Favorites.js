import React, { useState } from 'react';
import { IoMdRemoveCircleOutline } from 'react-icons/io';

import './Favorites.css';
import Button from '../../components/Buttons/Button/Button';


const favorites = props => {
    const temp = Math.round(props.temp - 273.15);
    return (
        <div className='Favorites-Card'>
            <div className='City-Info-Container' onClick={props.showFavoriteWeather}>
                <div>
                    <p className='City'>{props.name}</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src={require(`../../../src/assets/icons/${props.icon}.png`).default} alt='img'/>
                    <p className='Temperature'>{temp}°C</p>
                </div>
            </div>
            <Button clicked={props.clicked} btnType='Remove'>
                <IoMdRemoveCircleOutline/>
            </Button>
        </div>
    );
};

export default favorites;
