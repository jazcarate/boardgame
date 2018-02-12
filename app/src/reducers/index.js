import {combineReducers} from 'redux';
import rooms from './roomsReducer';
import currentUser from './currentUserReducer';

const rootReducer = combineReducers({
  currentUser,
  rooms
});

export default rootReducer;