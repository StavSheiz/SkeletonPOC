import Vue from 'vue';
import App from './qb_App.vue';

var qbInter = divId => {
	Vue.config.productionTip = false;
	return new Vue({
		render: h => h(App)
	}).$mount(divId);
};

export { qbInter };
