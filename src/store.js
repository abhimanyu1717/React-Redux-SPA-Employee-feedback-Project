import {applyMiddleware, createStore}  from "redux";
//middlewares
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./reducer/loginReducer";

const initialState = {
    users: [],
    feedBackList:[]
  };
const middleware = applyMiddleware(thunk, logger);
const store =  createStore(reducer, initialState, middleware);
export default store;