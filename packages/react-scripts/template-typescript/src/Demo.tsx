import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Component from './index';

interface DemoState {
  rangeValue: number;
}

class Demo extends Component {
  render() {
    return (
      <div>
        <Component />
      </div>
    )
  }
}

ReactDOM.render(<Demo />, document.getElementById('root'));
