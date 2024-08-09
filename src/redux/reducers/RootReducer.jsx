import { combineReducers } from 'redux';
import buttonReducer from './ButtonSlice';
import filterReducer from './FilterSlice';
import modalReducer from './ModalSlice';

const rootReducer = combineReducers({
  button: buttonReducer,
  filter: filterReducer,
  modal: modalReducer,
});

export default rootReducer;
