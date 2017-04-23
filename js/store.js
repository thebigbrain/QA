import { createStore, combineReducers } from 'redux';
import { navigator } from './navigator';
import { AppNavigator } from './navigator';

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return (newState ? newState : state)
};

const appReducer = combineReducers({
  nav: navReducer
});

export const store = createStore(appReducer);
