import appConfig from '../../st_appConfig';

const requestUtils = {
	serverURL: appConfig.serverURL,
	sendGetRequest (action) {
		return new Promise((resolve, reject) => {
			fetch(this.serverURL + action).then((response) => {
				if (response && response.ok) {
					response.json().then((data) => {
						resolve(data);
					}, (err) => {
						reject(err);
					});
				} else {
					reject(new Error());
				}
			}, (err) => {
				reject(err);
			});
		});
	}
};

export default requestUtils;
