import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';


import Home from './containers/Home/Home';
import Header from './containers/Header/Header';
import Weather from './containers/Weather/Weather';
import './App.css';


class App extends Component{

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

export default App;
