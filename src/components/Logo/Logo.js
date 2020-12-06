import React from 'react';
import { NavLink } from 'react-router-dom';

import AppLogo from '../../assets/logo.png';
import './Logo.css';
import '../../mode-css/Mode.css';

const logo = props => {
    const modeColor = props.mode ? 'Light-Mode-Color' : 'Dark-Mode-Color'
    return(
        <NavLink
            activeStyle={{
                border:'transparent'
            }}
            className='Nav' to='/'>
            <div className='Logo' style={{height: props.height}}>
                <img src={AppLogo} alt='Logo'/>
                <div className='App-Name'>
                    <p className={['Logo-Name',modeColor].join(' ')}>SHOKIDEV</p>
                    <p className={['App-Type',modeColor].join(' ')}>weather</p>
                </div>
            </div>
        </NavLink>
    );
};

export default logo;
