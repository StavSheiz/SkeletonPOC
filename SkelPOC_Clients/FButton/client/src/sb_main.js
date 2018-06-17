import Vue from 'vue';
import App from './sb_App.vue';

var inter = divId => {
	Vue.config.productionTip = false;
	return new Vue({
		render: h => h(App)
	}).$mount(divId);
};

export { inter };
