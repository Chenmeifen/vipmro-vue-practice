import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BossApi from './api'
import router from './router/router.js'
import postMessage from './postMessage.js'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(BossApi);
Vue.use(postMessage);
Vue.prototype.BossApi = BossApi;
const store = new Vuex.Store({
    state: {
        count: 0,
        menuData: [],
        menuTreeData: []
    },
    mutations: {
        reset(state){
            state.count = 0;
        },
        increment (state) {
            state.count++
        }
    },
    actions: {
        initMenuData(state){
            return Vue.prototype.BossApi.getMenuData().then((response) => {
                state.menuData = response.data;
                console.log('dispatch to handle menu data', state.menuData.length)
            });

        }
    }
})
new Vue({
    el: '#app',
    router,
    store
});