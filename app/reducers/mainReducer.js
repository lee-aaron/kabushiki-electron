import { AUTH } from '../actions/mainAction';

const initialState = {
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH:
     return {
       ...state,
       payload: action.payload
     }
    default:
      return state;
  }
}
