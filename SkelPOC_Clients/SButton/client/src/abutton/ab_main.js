import Vue from 'vue';
import App from './ab_App.vue';

var abInter = divId => {
	Vue.config.productionTip = false;
	return new Vue({
		render: h => h(App)
	}).$mount(divId);
};

export { abInter };
