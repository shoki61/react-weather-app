import React, { Component } from 'react';


import './Header.css';

class Header extends Component{
    render(){
        return(
            <div className='Header'>
                <div>App name</div>
                <a href='https://github.com/shoki61/react-weather-app' target='_blank'>
                    <i className="fab fa-github"> </i>
                </a>
                <div>Mode button</div>
            </div>
        );
    };
};

export default Header;
