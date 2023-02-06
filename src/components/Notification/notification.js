import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from "./Notification.module.css"
export class Notification extends Component {
  state = {};

  render() {
    const { message } = this.props;
    return (
      <>
        <p className={clsx(css.infoTag)}>{message}</p>
      </>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};
