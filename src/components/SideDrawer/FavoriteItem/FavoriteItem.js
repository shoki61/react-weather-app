import React from 'react';

import './FavoriteItem.css';

const favoriteItem = props => (
    <div className='Favorite-Item'>
       <span className='Name'>{props.name}</span>
       <span className='Location-Temp'>{props.temp}°C</span>
    </div>
);

export default favoriteItem;
