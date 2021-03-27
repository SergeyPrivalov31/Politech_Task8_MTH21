import { polytechAPI } from "../api/api";

const SET_BRAINS = 'SET_BRAINS';


let initialState = {
	brainData: [],
	portionSize: 3
};

const brainReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_BRAINS: {
			return { ...state, brain: action.brain }
		}
		default:
			return state;
	}
}
export const setBrains = (brains) => ({ type: SET_BRAINS, brains })

export const requestBrains = (page, pageSize) => {// это thunkCreator
	return async (dispatch) => {

		let data = await polytechAPI.getBrains(page, pageSize);

		dispatch(setBrains(data.items));

	}
}

export default usersReducer;