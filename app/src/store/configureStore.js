import {createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import ReduxPromise from 'redux-promise';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

let socket = io();
let socketIoMiddleware = createSocketIoMiddleware(socket, "SERVER/");

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable no-underscore-dangle */
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(ReduxPromise, socketIoMiddleware)
    )
  );
}
/* eslint-enable */
