import { SET_BROKERAGE, SET_EMAIL, SET_PASS } from '../actions/mainAction';

const initialState = {
  brokerage: '',
  email: '',
  pass: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_BROKERAGE:
      return {
        ...state,
        brokerage: action.brokerage
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.email
      };
    case SET_PASS:
      return {
        ...state,
        pass: action.pass
      };
    default:
      return state;
  }
}
