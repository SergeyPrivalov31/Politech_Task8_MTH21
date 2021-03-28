import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import brainReducer from ".\brain-reducer.js";

let reducers = combineReducers({
	brainPage: brainReducer,
	//Собираем все редьюсеры и комбинируем в один
})

const store = createStore(reducers(applyMiddleware(thunkMiddleware)));

export default store;