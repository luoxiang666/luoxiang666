import Vue from 'vue';
import App from './component/App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);//启用插件

import App from './component/App.vue';//到日自己写的根组件

import routerConfig from './router/index.js';

new Vue({
    el:'#app',
    render: function (createElement) {
        return createElement(App);
    }
});