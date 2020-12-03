import React, { useState } from 'react';
import { IoMdRemoveCircleOutline } from 'react-icons/io';

import './Favorites.css';
import Button from '../../components/Buttons/Button/Button';

import img from '../../assets/icons/11n.png';

const favorites = props => (
    <div className='Favorites-Card'>
        <div className='City-Info-Container' onClick={props.showFavoriteWeather}>
            <div>
                <p className='City'>{props.locationName}</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={img} alt='img'/>
                <p className='Temperature'>25°C</p>
            </div>
        </div>
        <Button clicked={props.clicked} btnType='Remove'>
            <IoMdRemoveCircleOutline/>
        </Button>
    </div>
);

export default favorites;
