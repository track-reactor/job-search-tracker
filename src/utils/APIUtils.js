const DOMAIN = 'http://localhost:3000'

export const getRequest = (endpoint, cb) => {
	const url = DOMAIN + endpoint;

	$.ajax({
		type: 'GET',
		url: url,
		success: (data) => {
			cb(null, data);
		},
		error: (error) => {
			cb(error, null);
		}
	})
}

export const postRequest = (endpoint, params, cb) => {
	const url = DOMAIN + endpoint;

	$.ajax({
	  type: 'POST',
	  url: url,
	  data: JSON.stringify(params),
	  contentType: 'application/json',
		success: (data) => {
			cb(null, data);
		},
		error: (error) => {
			cb(error, null);
		}
	})
}