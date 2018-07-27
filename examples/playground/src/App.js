import React, { Component } from 'react';
// import fetchCats from './catSearch';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Добро пожаловать</h1>
        </header>
        <p className="App-intro">
          Йоу
        </p>
      </div>
    );
  }
}

// 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'

export default App;
