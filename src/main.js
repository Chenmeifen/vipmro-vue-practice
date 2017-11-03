import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import postMessage from './postMessage.js'

Vue.use(axios);
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(postMessage);
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

const home = r => require.ensure([], () => r(require('./component/Home.vue')), 'home');
const router = new VueRouter({
    routes: [
        {
            name: "root", path: "/", component: home
        }
    ]
})
new Vue({
    el: '#app',
    router
})
