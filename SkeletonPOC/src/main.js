import 'reset-css';
import Vue from 'vue';
import load from './skeletonInfra/loader';
import App from './App.vue';
import store from './store';
import lightRouter from './lightRouter';

const routerInstance = lightRouter({ root: '#', mode: 'history' });

// adding routes
routerInstance.add({
	pattern: /^$/,
	handler () {
		document.getElementById('content').innerHTML = 'home page';
	}
}).add({
	pattern: /about/,
	handler () {
		document.getElementById('content').innerHTML = 'about page';
	}
}).add({
	// pattern: /products\/(.*)\/edit\/(.*)/
	pattern: /#\/stuTest(\/?)(.*)/,
	handler () {
		load('http://localhost/stuApp', 'content', 'skelpoc');
	}
});

Vue.config.productionTip = false;

new Vue({
	store,
	render: h => h(App)
}).$mount('#app');

load('http://localhost/SButtonTester', 'sButton', 'sbutton');
routerInstance.check(location.hash);
