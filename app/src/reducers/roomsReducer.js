import initialState from './initialState';

export default function roomsReducer(state=initialState.rooms, action) {
  switch(action.type) {
    case 'GET_ROOMS':
      return action.payload; 
    case 'CREATE_ROOM':
      return  [
        ...state,
        action.payload
      ];
    default: 
      return state;
  }
}