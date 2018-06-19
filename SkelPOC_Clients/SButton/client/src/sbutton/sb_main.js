import Vue from 'vue';
import App from './sb_App.vue';

var sbInter = divId => {
	Vue.config.productionTip = false;
	return new Vue({
		render: h => h(App)
	}).$mount(divId);
};

export { sbInter };
