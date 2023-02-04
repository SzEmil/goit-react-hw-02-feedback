import React from 'react';
import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/feedbackOptions';
import { Statistics } from './Statistics/statistics';
import { Notification } from './Notification/notification';
let totalValue = 0;
let positiveProcentage = 0;
let kliker = 0;
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
    });
    kliker++;
  };

  countPositiveFeedbackPercentage = () => {
    positiveProcentage =
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100;
    console.log('procentowanie');
    return positiveProcentage;
  };
  countTotalFeedback = () => {
    totalValue = this.state.good + this.state.neutral + this.state.bad;
    console.log('sumowanie');
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
        {kliker === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </>
    );
  }
}
