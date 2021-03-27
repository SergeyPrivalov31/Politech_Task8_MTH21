import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: `https://`,
	headers: {
		"API-KEY": "4c7e10ff-30a6-4821-8cb9-3d1a029315d3"
	}
})
export const polytechAPI = {

	getBrains(currentPage = 1, pageSize = 5) {
		return instance.get(`brain?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data;
			});
	}
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`);
	},
	login(email, password, rememberMe = false, captcha = null) {
		return instance.post(`auth/login`, { email, password, rememberMe, captcha });
	},
	logout() {
		return instance.delete(`auth/login`);
	}
}




