import React from 'react';
import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/feedbackOptions';
let totalValue = 0;
let positiveProcentage = 0;
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  static defaultProps = {};

  btnIncrement = event => {
    const pick = event.target;
    const pickVariant = pick.getAttribute('variant');
    const usedVariant = pickVariant.toLowerCase();

    this.setState((state, props) => {
      if (usedVariant === 'good') {
        return {
          good: state.good + 1,
        };
      }

      if (usedVariant === 'neutral') {
        return {
          neutral: state.neutral + 1,
        };
      }

      if (usedVariant === 'bad') {
        return {
          bad: state.bad + 1,
        };
      }
      this.countPositiveFeedbackPercentage();
      this.countTotalFeedback();
    });
  };

  countPositiveFeedbackPercentage = () => {
    positiveProcentage =
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100;
    return positiveProcentage;
  };
  countTotalFeedback = () => {
    totalValue = this.state.good + this.state.neutral + this.state.bad;
    return totalValue;
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <FeedbackOptions options="Good" onLeaveFeedback={this.btnIncrement} />
        <FeedbackOptions
          options="Neutral"
          onLeaveFeedback={this.btnIncrement}
        />
        <FeedbackOptions options="Bad" onLeaveFeedback={this.btnIncrement} />

        <h2>Statistics</h2>
        <span>Good: {this.state.good}</span>
        <span>Neutral: {this.state.neutral}</span>
        <span>Bad: {this.state.bad}</span>
        <span>Total: {totalValue}</span>
        <span>Positive feedback: {positiveProcentage}%</span>
      </>
    );
  }
}
