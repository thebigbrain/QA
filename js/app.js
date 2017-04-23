/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { store } from './store';
import { AppNavigator } from './navigator';

// const Svgs = require('../assets/fonts/fontawesome-webfont.svg');

@connect(state => ({
  nav: state.nav
}))
class AppWithNavigationState extends Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

class QA extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export const setup = () => QA;
