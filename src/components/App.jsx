import React from 'react';
import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/feedbackOptions';
import { Statistics } from './Statistics/statistics';
import { Notification } from './Notification/notification';
import { Section } from './Section/section';
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
  };

  countPositiveFeedbackPercentage = () => {
    let positiveProcentage = Number(
      Math.floor(
        (this.state.good /
          (this.state.good + this.state.neutral + this.state.bad)) *
          100
      ).toFixed(0)
    );

    return isNaN(positiveProcentage) ? 0 : positiveProcentage;
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options="Good" onLeaveFeedback={this.btnIncrement} />
          <FeedbackOptions
            options="Neutral"
            onLeaveFeedback={this.btnIncrement}
          />
          <FeedbackOptions options="Bad" onLeaveFeedback={this.btnIncrement} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
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
        </Section>
      </>
    );
  }
}
