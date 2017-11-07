import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import postMessage from './postMessage.js'
import router from './router/router.js'

Vue.use(axios);
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(postMessage);
Vue.use(Vuex);
Vue.prototype.axios = axios;
Vue.prototype.ajax = opt =>
    new Promise( resolve => {
        var config = {
            method: opt.method || 'GET',
            url: opt.url || ''
        }
        if(opt.method && opt.method === 'POST'){
            config.data = opt.data || {};
        }else{
            config.params = opt.data || {};
        }
        axios(config).then( res => {
            if(res && res.data){
                if(res.data.code === 200) {
                    resolve(res.data);
                }
            }
        }).catch(error => console.log('接口异常'));

    } );

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
            return axios.get('http://localhost:8080/emro_boss/loginmenu/getMenuData')
                    .then(function (response) {
                        state.menuData = response.data
                        console.log('dispatch to handle menu data', state.menuData)
                    });

        }
    }
})
new Vue({
    el: '#app',
    router,
    store
});