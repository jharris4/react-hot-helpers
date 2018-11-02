import React, { Component } from 'react';
import { AppContainer } from 'react-hot-loader';
import RedboxAndConsole from './RedboxAndConsole';

export default class HotLoaderWrapper extends Component {
  render() {
    const { children } = this.props;

    return (
      <AppContainer errorReporter={RedboxAndConsole}>
        {children}
      </AppContainer>
    );
  }
}
