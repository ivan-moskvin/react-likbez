import React, { Component } from 'react';
import fetchCats from './catSearch';
import Cat from './components/cat';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    cats : []
  };

  constructor() {
    super();
    fetchCats('cute cat', 1).then(cats => {
      this.setState({cats: cats})
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'} className="App-logo" alt="logo" />
          <h1 className="App-title">Добро пожаловать</h1>
        </header>
        {this.state.cats.map(cat => <Cat image={cat}/>)}
        <Cat image={'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'}/>
        <p className="App-intro">
          Йоу, братва
        </p>
      </div>
    );
  }
}

// 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'

export default App;
