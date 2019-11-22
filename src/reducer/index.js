import { combineReducers } from 'redux';
import login from './loginReducer';
import homeComp from './home-reducer';
import feedBack from './feedBackReducer';

export default combineReducers({
  homeComp,
  login,
  feedBack
  });