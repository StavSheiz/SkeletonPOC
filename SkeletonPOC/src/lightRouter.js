export default function lightRouter ({ mode, root }) {
	function clearSlashes (path) {
		return path.toString().replace(/\/$/, '').replace(/^\//, '');
	}

	return (function lightRouterCtor () {
		this.routes = [];
		this.mode = mode === 'history' && !!(history.pushState) ? 'history' : 'hash';
		this.root = root ? `${clearSlashes(root)}/` : '/';

		this.getFragment = () => {
			let fragment = '';
			if (this.mode === 'history') {
				fragment = clearSlashes(decodeURI(location.hash));
				fragment = fragment.replace(/\?(.*)$/, '');
				fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment;
			} else {
				const match = window.location.href.match(/#(.*)$/);
				fragment = match ? match[1] : '';
			}

			return clearSlashes(fragment);
		};

		this.add = ({ pattern, handler }) => {
			this.routes.push({ pattern: pattern || '', handler });
			return this;
		};

		this.remove = (routePattern) => {
			this.routes = this.routes.filter(route =>
				route.pattern.toString() !== routePattern.toString());

			return this;
		};

		this.flush = () => {
			this.routes = [];
			this.mode = null;
			this.root = '/';
			return this;
		};

		this.check = (urlFragment) => {
			const fragment = urlFragment || location.hash;
			const route = this.routes.find(({ pattern }) => fragment.match(pattern));
			if (route) {
				route.handler.apply({}, fragment.match(route.pattern));
			}

			return this;
		};

		this.navigate = (path = '') => {
			if (this.mode === 'history') {
				history.pushState(null, null, this.root + clearSlashes(path));
			} else {
				window.location.href = `${window.location.origin}${window.location.pathname}#${path}`;
			}
			return this;
		};

		window.onhashchange = () => {
			this.check(location.hash);
		};

		return this;
	}.bind(Object.create(null)))();
}
