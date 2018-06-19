import axios from 'axios';

// function loadScript (src) {
// 	return new Promise((resolve, reject) => {
// 		const scriptTagApp = document.createElement('script');
// 		scriptTagApp.src = src;
// 		scriptTagApp.onload = resolve;
// 		scriptTagApp.onerror = () => { reject(new Error(`faild load script ${scriptTagApp.src}`)); };
// 		scriptTagApp.async = true;
// 		document.body.appendChild(scriptTagApp);
// 	});
// }

function loadDeferredScript (src) {
	return new Promise((resolve, reject) => {
		const scriptTagApp = document.createElement('script');
		scriptTagApp.src = src;
		scriptTagApp.onload = resolve;
		scriptTagApp.onerror = () => { reject(new Error(`faild load script ${scriptTagApp.src}`)); };
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

function interLibrary (mountPoint, libName) {
	document.getElementById(mountPoint).innerHTML = '<div id="aaa_mountPoint"></div>';
	window[libName].inter('#aaa_mountPoint');
}

export default function load (getAppRoute, mountPoint, libName) {
	const trimmedRoute = getAppRoute.replace(/\/$/, '');
	axios.get(`${trimmedRoute}/Publisher/GetApplication`).then(({ data }) => {
		for (let i = 0; i < data.js.length - 1; i++) {
			loadDeferredScript(`${trimmedRoute}/${data.js[i]}`).catch((err) => {
				throw err;
			});
		}
		loadDeferredScript(`${trimmedRoute}/${data.js[data.js.length - 1]}`).then(() => {
			interLibrary(mountPoint, libName);
		}).catch((e) => {
			throw e;
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
