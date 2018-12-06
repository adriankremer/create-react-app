import React, { Component } from 'react';
import './component.css';

interface IComponentProps {
  text?: string;
}

class NewComponent extends Component<IComponentProps> {
  public render() {
    const {
      text
    } = this.props;
    return (
      <button className="New-component">
        {text}
      </button>
    );
  }
}

export default NewComponent;
