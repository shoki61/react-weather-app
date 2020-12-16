import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './containers/Home/Home';
import Header from './containers/Header/Header';
import Weather from './containers/Weather/Weather';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import * as actions from './store/actions/index';
import './App.css';


class App extends Component{

    state={
        checkedA: false,
        checkedB: false,
        showSideDrawer: false
    };

    componentDidMount() {
        const locationName = localStorage.getItem('locationName');
        if(locationName) this.props.onRefreshHandler(locationName);
        const favorites = localStorage.getItem('favorites');
        if(favorites){
            const favs = JSON.parse(favorites);
            for(let i=0; i < favs.length; i++){
                this.props.onGetFavorites(favs[i]);
            };
        };
    };

    changeMode = (event) => this.setState({[event.target.name]: event.target.checked});

    changeSideDrawerVisible = () => this.setState({showSideDrawer: !this.state.showSideDrawer});

    render(){
        return (
            <div className="App">
                <Header
                    sideDrawerHandler={this.changeSideDrawerVisible}
                    value={this.state.checkedB}
                    clicked={this.changeMode}
                />
                {this.state.showSideDrawer ? <Backdrop clicked={this.changeSideDrawerVisible} /> : null}
                <SideDrawer
                    clicked={this.changeMode}
                    value={this.state.checkedB}
                    show={this.state.showSideDrawer}
                />
                <Route path='/' exact render={props => <Home mode={this.state.checkedB} {...props}/>}/>
                <Route path='/weather' render={props => <Weather mode={this.state.checkedB} {...props}/>}/>
            </div>
        );
  };
};


const mapDispatchToProps = dispatch => {
    return{
        onRefreshHandler: location => dispatch(actions.fetchWeather(location)),
        onGetFavorites: (locationName) => dispatch(actions.fetchFavorite(locationName))
    };
};

export default connect(null, mapDispatchToProps)(App);
