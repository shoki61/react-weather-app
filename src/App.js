import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './containers/Home/Home';
import Header from './containers/Header/Header';
import Weather from './containers/Weather/Weather';
import * as actions from './store/actions/index';
import './App.css';


class App extends Component{

    componentDidMount() {
        if(localStorage.key('locationName')) this.props.onRefreshHandler(localStorage.getItem('locationName'));
        if(localStorage.key('favorite')) this.props.onGetFavorites();
    };

    render(){
        return (
            <div className="App">
                <Header/>
                <Route path='/' exact component={Home}/>
                <Route path='/weather' component={Weather}/>
            </div>
        );
  };
};

const mapDispatchToProps = dispatch => {
    return{
        onRefreshHandler: (location) => dispatch(actions.fetchWeather(location)),
        onGetFavorites: () => dispatch(actions.getLocalStorageFavs())
    };
};

export default connect(null, mapDispatchToProps)(App);
