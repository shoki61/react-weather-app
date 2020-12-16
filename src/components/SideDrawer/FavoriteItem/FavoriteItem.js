import React from 'react';
import { NavLink } from 'react-router-dom';
import { CgRemove } from 'react-icons/cg';

import './FavoriteItem.css';
import Button from '../../Buttons/Button/Button';

const favoriteItem = props => (
    <div className='Favorite-Item'>
        <NavLink
            activeStyle={{
                border:'transparent'
            }}
            onClick={props.showFavoriteWeather}
            className='Side-Drawer-Nav'
            to='/weather'
        >
            <span className='Name'>{props.name}</span>
        </NavLink>
        <div style={{display:'flex',alignItems:'center'}}>
            <span className='Location-Temp'>{props.temp}°C</span>
            <Button clicked={props.clicked} btnType='Side-Drawer-Remove'>
                <CgRemove/>
            </Button>
        </div>
    </div>
);

export default favoriteItem;
