import React from 'react';

import './Logo.css';
import AppLogo from '../../assets/logo.png';

const logo = props => (
    <div className='Logo' style={{height: props.height}}>
        <img src={AppLogo} alt='Logo'/>
        <div className='App-Name'>
            <p className='Logo-Name' >SHOKIDEV</p>
            <p className='App-Type' >weather</p>
        </div>
    </div>
);

export default logo;
