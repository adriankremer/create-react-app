import React, { Component } from 'react';
import './component.css';

class NewComponent extends Component {
  render() {
    const { text } = this.props;
    return <button className="New-component">{text}</button>;
  }
}

export default NewComponent;
