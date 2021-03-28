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
<<<<<<< HEAD

	return axios.get(url + params.join('&'))
}
//sourse https://github.com/DenisVasiHH
=======
}

export function getVertexes({color, topic}) {

	let url = "https://faraday-lab.online/api/get?"
	let params = []

	if (color) {
		params.push(`color=${color}`)
	}

	if (topic) {
		params.push(`topic=${topic}`)
	}

	return axios.get(url + params.join('&'))
}
>>>>>>> df8d5197485e061cde87f85d939f8a2da77b2f6c
