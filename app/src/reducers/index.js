import {combineReducers} from 'redux';
import rooms from './roomsReducer';
import room from './roomReducer';
import currentUser from './currentUserReducer';

const rootReducer = combineReducers({
  currentUser,
  rooms,
  room
});

export default rootReducer;