import initialState from './initialState';
import * as constants from '../constants';

export default function roomsReducer(state=initialState.rooms, action) {
  switch(action.type) {
    case 'GET_ROOMS':
      return action.payload; 
    case constants.INCOMING + 'CREATE_ROOM':
    case constants.OUTGOING + 'CREATE_ROOM':
      return  [
        ...state,
        action.payload
      ];
    default: 
      return state;
  }
}