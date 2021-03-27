import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import brainReducer from ".\brain-reducer.js";

let reducers = combineReducers({
	brainPage: brainReducer,
	app: appReducer
})

const store = createStore(reducers(applyMiddleware(thunkMiddleware)));

export default store;