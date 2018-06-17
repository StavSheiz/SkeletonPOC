// import stuPoc from "./mainVue";

// stuPoc("#app");

import Vue from 'vue';
import App from './st_App.vue';
import store from './st_store';

var inter = divId => {
	Vue.config.productionTip = false;
	return new Vue({
		store,
		render: h => h(App)
	}).$mount(divId);
};

export { inter };

// export var a = "jibrish daled";
