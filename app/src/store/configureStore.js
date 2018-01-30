import {createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import ReduxPromise from 'redux-promise';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable no-underscore-dangle */
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(ReduxPromise)
    )
  );
}
/* eslint-enable */
