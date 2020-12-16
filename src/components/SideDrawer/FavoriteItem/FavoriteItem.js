import React from 'react';
import { CgRemove } from 'react-icons/cg';

import './FavoriteItem.css';
import Button from '../../Buttons/Button/Button';

const favoriteItem = props => (
    <div className='Favorite-Item'>
        <span onClick={props.showFavoriteWeather} className='Name'>{props.name}</span>
        <div style={{display:'flex',alignItems:'center'}}>
            <span className='Location-Temp'>{props.temp}°C</span>
            <Button clicked={props.clicked} btnType='Side-Drawer-Remove'>
                <CgRemove/>
            </Button>
        </div>
    </div>
);

export default favoriteItem;
