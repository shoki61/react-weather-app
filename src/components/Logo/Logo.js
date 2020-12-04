import React from 'react';
import { NavLink } from 'react-router-dom';

import './Logo.css';
import AppLogo from '../../assets/logo.png';

const logo = props => {
    return(
        <NavLink
            activeStyle={{
                border:'transparent'
            }}
            className='Nav' to='/'>
            <div className='Logo' style={{height: props.height}}>
                <img src={AppLogo} alt='Logo'/>
                <div className='App-Name'>
                    <p className='Logo-Name'>SHOKIDEV</p>
                    <p className='App-Type'>weather</p>
                </div>
            </div>
        </NavLink>
    );
};

export default logo;
