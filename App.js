
// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './src/store';
import MainTab from './src/navigation/MainTab';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <MainTab />
      </Provider>
    );
  }
}
