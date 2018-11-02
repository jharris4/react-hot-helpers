import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Redbox from 'redbox-react';

export default class RedBoxAndConsole extends Component {
  static propTypes = {
    error: PropTypes.instanceOf(Error).isRequired
  };

  static displayName = 'RedBoxAndConsole';

  logError() {
    const { error } = this.props;
    console.error(error, error.stack);
  }

  componentDidMount () {
    this.logError();
  }
  componentDidUpdate () {
    this.logError();
  }

  render () {
    const { error } = this.props;
    return <Redbox error={error}/>;
  }
}