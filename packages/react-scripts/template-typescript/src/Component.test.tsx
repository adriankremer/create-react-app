import React from 'react';
import ReactDOM from 'react-dom';
import NewComponent from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
