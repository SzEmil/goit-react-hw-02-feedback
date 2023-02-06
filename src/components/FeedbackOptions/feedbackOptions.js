import React from 'react';
import { Component } from 'react';
import PropTypes from "prop-types";
import clsx from 'clsx';
import css from "./FeedbackOptions.module.css"
export class FeedbackOptions extends Component {
  state = {};

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        <button className={clsx(css["btn"])} variant={options} onClick={onLeaveFeedback}>
          {options}
        </button>
      </>
    );
  }
}

FeedbackOptions.propTypes ={
  options: PropTypes.string,
  onLeaveFeedback: PropTypes.func.isRequired
}