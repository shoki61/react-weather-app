import React from 'react';

import './Favorites.css';

import img from '../../assets/icons/11n.png';

const favorites = props => (
    <div className='Favorites-Card'>
        <p className='City'>Ordu</p>
        <div style={{display:'flex', alignItems:'center'}}>
            <img src={img} alt='img'/>
            <p className='Temperature'>25°C</p>
        </div>
    </div>
);

export default favorites;
