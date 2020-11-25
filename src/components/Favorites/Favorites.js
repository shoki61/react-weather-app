import React from 'react';
import { IoMdRemoveCircleOutline } from 'react-icons/io';

import './Favorites.css';
import Button from '../../components/Buttons/Button/Button';

import img from '../../assets/icons/11n.png';


const favorites = props => (
    <div className='Favorites-Card'>
        <Button btnType='Remove'>
            <IoMdRemoveCircleOutline/>
        </Button>
        <p className='City'>Ordu</p>
        <div style={{display:'flex', alignItems:'center'}}>
            <img src={img} alt='img'/>
            <p className='Temperature'>25°C</p>
        </div>
    </div>
);

export default favorites;
