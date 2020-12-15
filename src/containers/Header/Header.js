import React, { Component } from 'react';
import { CgMenu } from 'react-icons/cg';

import Logo from '../../components/Logo/Logo';
import SwitchButton from "../../components/Buttons/SwitchButton/SwitchButton";
import Button from '../../components/Buttons/Button/Button';
import './Header.css';
import '../../mode-css/Mode.css';


class Header extends Component{
    render(){
        const modeBackground = this.props.value ? 'Light-Mode-Background Light-Mode-Box-Shadow': 'Dark-Mode-Background Dark-Mode-Box-Shadow';
        return(
            <div className={['Header',modeBackground].join(' ')}>
                <Logo mode={this.props.value} height='65px'/>
                <a href='https://github.com/shoki61/react-weather-app' rel='noreferrer' target='_blank'>
                    <i className="fab fa-github"> </i>
                </a>
                <SwitchButton checked={this.props.value} clicked={this.props.clicked}/>
                <Button clicked={this.props.sideDrawerHandler} btnType='Menu'>
                    <CgMenu/>
                </Button>
            </div>
        );
    };
};

export default Header;
