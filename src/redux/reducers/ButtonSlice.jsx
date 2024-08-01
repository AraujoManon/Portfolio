
import { TOGGLE_BUTTON } from './ButtonActions';

const initialState = {
  isActive: false
};

const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BUTTON:
      return {
        ...state,
        isActive: !state.isActive
      };
    default:
      return state;
  }
};

export default buttonReducer;
