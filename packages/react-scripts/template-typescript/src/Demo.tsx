import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewComponent from './index';
import './demo.css';

interface DemoState {
  rangeValue: number;
}

class Demo extends Component {
  render() {
    return (
      <div>
        <NewComponent />
      </div>
    )
  }
}

ReactDOM.render(<Demo />, document.getElementById('root'));
