import React, { Component } from 'react';


import Home from './containers/Home/Home';
import Header from './containers/Header/Header';

import './App.css';


class App extends Component{
  render(){
    return (
        <div className="App">
            <Header/>
            <div>Home</div>
            <div>Weather</div>
        </div>
    );
  };
};

export default App;
