import { combineReducers } from 'redux';
import buttonReducer from './ButtonSlice';
import filterReducer from './FilterSlice';
import modalReducer from './ModalSlice';
import chatbot from './ChatBotSlice';

const rootReducer = combineReducers({
  button: buttonReducer,
  filter: filterReducer,
  modal: modalReducer,
  chatbot: chatbot,
});

export default rootReducer;
