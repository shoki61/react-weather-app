import React, { Component } from 'react';


import Logo from '../../components/Logo/Logo';

import './Header.css';


class Header extends Component{
    render(){
        return(
            <div className='Header'>

                <Logo height='65px'/>

                <a href='https://github.com/shoki61/react-weather-app' target='_blank'>
                    <i className="fab fa-github"> </i>
                </a>

                <div>Mode button</div>
            </div>
        );
    };
};

export default Header;
