import React from 'react';
import { Button, Text, Alert, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Menu from './components/Menu';
import Home from './components/Home';

let AppRouteConfigs = {
  Home: { screen: Home }
};

let AppStackNavigatorConfig = {
  navigationOptions: {
    headerRight: <Menu/>
  }
};

export const AppNavigator = StackNavigator(AppRouteConfigs, AppStackNavigatorConfig);
