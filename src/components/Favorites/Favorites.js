import React, { useState } from 'react';
import { IoMdRemoveCircleOutline } from 'react-icons/io';

import './Favorites.css';
import Button from '../../components/Buttons/Button/Button';

import img from '../../assets/icons/11n.png';

const favorites = props => (
        <div className='Favorite-Container'>
            <Button clicked={props.clicked} btnType='Remove'>
                <IoMdRemoveCircleOutline/>
            </Button>
            <div className='Favorites-Card' onClick={props.showFavoriteWeather}>
                <p className='City'>{props.locationName}</p>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src={img} alt='img'/>
                    <p className='Temperature'>25°C</p>
                </div>
            </div>
        </div>
)

export default favorites;
