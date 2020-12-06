import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './containers/Home/Home';
import Header from './containers/Header/Header';
import Weather from './containers/Weather/Weather';
import * as actions from './store/actions/index';
import './App.css';


class App extends Component{

    state={
        checkedA: false,
        checkedB: false,
    };

    componentDidMount() {
        const locationName = localStorage.getItem('locationName');
        if(locationName) this.props.onRefreshHandler(localStorage.getItem('locationName'));
        const favorites = localStorage.getItem('favorites');
        if(favorites) this.props.onGetFavorites();
    };

    changeMode = (event) => this.setState({[event.target.name]: event.target.checked});

    render(){
        return (
            <div className="App">
                <Header value={this.state.checkedB} clicked={this.changeMode}/>
                <Route path='/' exact render={props => <Home mode={this.state.checkedB} {...props}/>}/>
                <Route path='/weather' render={props => <Weather mode={this.state.checkedB} {...props}/>}/>
            </div>
        );
  };
};


const mapDispatchToProps = dispatch => {
    return{
        onRefreshHandler: location => dispatch(actions.fetchWeather(location)),
        onGetFavorites: () => dispatch(actions.getLocalStorageFavs())
    };
};

export default connect(null, mapDispatchToProps)(App);
