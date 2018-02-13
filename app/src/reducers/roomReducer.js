import initialState from './initialState';
import * as constants from '../constants';

export default function roomReducer(state=initialState.room, action) {
  switch(action.type) {
    case 'JOIN_ROOMS':
      return action.payload; 
    default: 
      return state;
  }
}