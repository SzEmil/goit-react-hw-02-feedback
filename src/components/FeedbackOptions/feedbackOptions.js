import React from 'react';
import { Component } from 'react';

export class FeedbackOptions extends Component {
  state = {};

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        <button variant={options} onClick={onLeaveFeedback}>
          {options}
        </button>
      </>
    );
  }
}
