
import { combineReducers } from 'redux';
import buttonReducer from './ButtonSlice';

const rootReducer = combineReducers({
  buttonReducer,
});

export default rootReducer;
