import React from 'react';
import { Component } from 'react';

export class Notification extends Component {
  state = {};

  render() {
    const { message } = this.props;
    return (
      <>
        <p>{message}</p>
      </>
    );
  }
}
