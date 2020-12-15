import React from 'react';

import FavoriteItem from './FavoriteItem/FavoriteItem';
import SwitchButton from '../Buttons/SwitchButton/SwitchButton';
import './SideDrawer.css';

const sideDrawer = props => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if(props.show) attachedClasses = ['SideDrawer', 'Open']
    return(
        <div
            className={attachedClasses.join(' ')}
        >
            <div className='Link-Mode-Container'>
                <a href='https://github.com/shoki61/react-weather-app' rel='noreferrer' target='_blank'>
                    <i className="fab fa-github"> </i>
                </a>
                <div style={{display:'flex',alignItems:'center'}}>
                    <SwitchButton checked={props.value} clicked={props.clicked}/>
                </div>
            </div>
            <FavoriteItem/>
        </div>
    )
};

export default sideDrawer;
