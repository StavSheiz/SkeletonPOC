import axios from 'axios';

function loadScript (src) {
	return new Promise((resolve, reject) => {
		const scriptTagApp = document.createElement('script');
		scriptTagApp.src = src;
		scriptTagApp.onload = resolve;
		scriptTagApp.onerror = () => { reject(new Error(`faild load async script ${scriptTagApp.src}`)); };
		scriptTagApp.async = true;
		document.body.appendChild(scriptTagApp);
	});
}

function loadDeferredScript (src) {
	return new Promise((resolve, reject) => {
		const scriptTagApp = document.createElement('script');
		scriptTagApp.src = src;
		scriptTagApp.onload = resolve;
		scriptTagApp.onerror = () => { reject(new Error(`faild load defer script ${scriptTagApp.src}`)); };
		scriptTagApp.async = false;
		scriptTagApp.type = 'text/javascript';
		scriptTagApp.defer = true;
		document.body.appendChild(scriptTagApp);
	});
}

function loadStyle (src) {
	const link = document.createElement('link');
	link.href = src;
	link.type = 'text/css';
	link.rel = 'stylesheet';
	link.media = 'screen,print';

	document.getElementsByTagName('head')[0].appendChild(link);
}

function interLibrary (mountPoint, libName, appName) {
	document.getElementById(mountPoint).innerHTML = '<div id="aaa_mountPoint"></div>';
	window[libName][appName]('#aaa_mountPoint');
}

/**
 * load a base capability
 * @param {getAppRoute} the route to base capability
 * @param {mountingMap} array of libraries and thier mounting points,
 *  this is set as array for max readability
 */
export default function load ({ getAppRoute, libName, mountingMap }) {
	const trimmedRoute = getAppRoute.replace(/\/$/, '');

	axios.get(`${trimmedRoute}/Publisher/GetApplication`).then(({ data }) => {
		const syncLoad = [];
		for (let i = 0; i < data['js-deps'].length; i++) {
			syncLoad.push(loadDeferredScript(`${trimmedRoute}/${data['js-deps'][i]}`));
		}

		Promise.all(syncLoad).then(() => {
			data.appsjs.forEach((app) => {
				loadScript(`${trimmedRoute}/${app.path}`).then(() => {
					const currMap = mountingMap.find(map => map.appName === app.appName);
					interLibrary(currMap.mountPoint, libName, currMap.appName);
				}).catch((e) => {
					console.error(e);
				});
			});
		}).catch((e) => {
			console.error(e);
		});

		// loadDeferredScript(`${trimmedRoute}/${data.js[0]}`);
		// loadDeferredScript(`${trimmedRoute}/${data.js[1]}`);
		// loadDeferredScript(`${trimmedRoute}/${data.js[2]}`).then(() => {
		// 	interLibrary(mountPoint, libName);
		// }).catch((e) => {
		// 	throw new Error(e);
		// });

		loadStyle(`${trimmedRoute}/${data.css}`);
	});
}
