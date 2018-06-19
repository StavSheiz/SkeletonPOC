import Vue from 'vue';
import App from './fb_App.vue';

var fbInter = divId => {
	Vue.config.productionTip = false;
	return new Vue({
		render: h => h(App)
	}).$mount(divId);
};

export { fbInter };
