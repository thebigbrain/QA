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

import { Provider, connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import { addNavigationHelpers, StackNavigator } from 'react-navigation';

class Home extends Component {
  render () {
    return (
      <Text>aaa</Text>
    )
  }
}

let AppRouteConfigs = {
  Home: { screen: Home }
};
const AppNavigator = StackNavigator(AppRouteConfigs);

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return (newState ? newState : state)
};

const appReducer = combineReducers({
  nav: navReducer
});

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

const store = createStore(appReducer);

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
