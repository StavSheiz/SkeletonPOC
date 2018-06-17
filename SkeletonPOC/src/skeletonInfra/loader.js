import axios from 'axios';

function loadScript (src) {
	return new Promise((resolve, reject) => {
		const scriptTagApp = document.createElement('script');
		scriptTagApp.src = src;
		scriptTagApp.onload = resolve;
		scriptTagApp.onerror = () => { reject(new Error(`faild load script ${scriptTagApp.src}`)); };
		scriptTagApp.async = true;
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
		loadScript(`${trimmedRoute}/${data.app}`).then(() => {
			interLibrary(mountPoint, libName);
		}).catch((e) => {
			throw new Error(e);
		});

		loadStyle(`${trimmedRoute}/${data.css}`);
	});
}
