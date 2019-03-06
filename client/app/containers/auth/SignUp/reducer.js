/*
 *
 * SignUp reducer
 *
 */

import { fromJS } from 'immutable';
// import { DEFAULT_ACTION } from './constants';
import * as types from './constants';

import { DEFAULT_ACTION, REGISTER_REQUEST } from './constants';

const initialState = fromJS({
  requesting: false,
  response: '',
  error: '',
  success: false
});

function signUpReducer(state = initialState, action = {type: ''}) {
  switch (action.type) {
    case types.DEFAULT_ACTION:
      return state;
    case types.DEFAULT_ACTION_REQUEST:
      return state;
    case types.DEFAULT_ACTION_SUCCESS:
      return state;
    case types.DEFAULT_ACTION_ERROR:
      return state;

      case REGISTER_REQUEST:
      console.log('register request reducer',action)
      
      return state.merge({ user: fromJS(action.data) });  
      
    default:
      return state;
  }
}

export default signUpReducer;
