import axios from "axios";

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
//sourse https://github.com/DenisVasiHH