import React from 'react';
import { Component } from 'react';

export class Statistics extends Component {
  state = {};
  static defaultProps = {
    positivePercentage: 0,
  };
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        {' '}
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>Total: {total}</span>
        <span>Positive feedback: {positivePercentage}%</span>
      </>
    );
  }
}
