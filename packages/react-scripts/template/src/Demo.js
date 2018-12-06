import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewComponent from './index';
import logo from './logo.svg';
import './demo.css';

class Demo extends Component {
  render() {
    return (
      <div className="Demo">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Component-wrapper">
          <NewComponent text="New Component" />
        </div>
        <p>
          Edit <code>src/Component.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('root'));
