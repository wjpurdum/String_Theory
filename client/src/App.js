import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import Main from './containers/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Main/>
      </div>
    );
  }
}

export default App;

