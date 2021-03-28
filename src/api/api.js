import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: `https://virtserver.swaggerhub.com/MTHPolytech/MTH/1.0.0`,
	headers: {
		"API-KEY": "&&&&&&&&&&&&&&&&&&???????????"
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