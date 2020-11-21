import React, { Component } from 'react';


import Home from './containers/Home/Home';

import './App.css';


class App extends Component{
  render(){
    return (
        <div className="App">
            <div>Header</div>
            <div>Home</div>
            <div>Current Weather</div>
            <div>FiveDay Forecast</div>
        </div>
    );
  };
};

export default App;
