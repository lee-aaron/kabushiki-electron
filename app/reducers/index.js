// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import mainReducer from './mainReducer';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    main: mainReducer
  });
}
