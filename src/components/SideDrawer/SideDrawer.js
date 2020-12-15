import React from 'react';

import FavoriteItem from './FavoriteItem/FavoriteItem';
import './SideDrawer.css';

const sideDrawer = props => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if(props.show) attachedClasses = ['SideDrawer', 'Open']
    return(
        <div
            className={attachedClasses.join(' ')}
        >

        </div>
    )
};

export default sideDrawer;
