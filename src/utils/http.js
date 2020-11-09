import axios from 'axios'
class http {
	request(url, params = {}, method = "POST", contentType = "application/x-www-form-urlencoded") {
		const m = method.toLowerCase();
		const resp =  axios({
			url: url,
			method: m,
			data: params,
			contentType: contentType
		});			
		return resp;
	}
}

export default (new http)