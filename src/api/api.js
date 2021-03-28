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

export function getVertexes(args) {

	let url = "https://faraday-lab.online/api/get?"
	let params = []

	if (args?.color) {
		params.push(`color=${args?.color}`)
	}

	if (args?.topic) {
		params.push(`topic=${args?.topic}`)
	}

	return axios.get(url + params.join('&'))
}
