import {createStore, applyMiddleware, compose} from "redux";
import {reducer} from "../reducers";
import thunk from "redux-thunk";

//combineReducers
// const reducers = combineReducers({reducer,newreducer})

//store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
