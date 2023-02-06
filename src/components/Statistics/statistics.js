import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Statistics.module.css';
export class Statistics extends Component {
  state = {};
  static defaultProps = {
    positivePercentage: 0,
  };
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={clsx(css.wrapper)}>
        <span className={clsx(css.stats)}>Good: {good}</span>
        <span className={clsx(css.stats)}>Neutral: {neutral}</span>
        <span className={clsx(css.stats)}>Bad: {bad}</span>
        <span className={clsx(css.stats)}>Total: {total}</span>
        <span className={clsx(css.stats)}>Positive feedback: {positivePercentage}%</span>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
