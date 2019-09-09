import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/reset.css';
// import ECharts from 'vue-echarts'
import echarts from 'echarts'


Vue.use(ElementUI);
// Vue.component('v-chart', ECharts)
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')