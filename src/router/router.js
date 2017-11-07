/**
 * vipmro.com
 * Created by cmf00627 on 2017/11/6.
 * describe:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(axios);
Vue.use(VueRouter);

const home = r => require.ensure([], () => r(require('@/component/Home.vue')), 'home');
let router = new VueRouter({
    routes: []
});
let children = [];
axios.get('http://localhost:8080/emro_boss/loginmenu/getMenuData')
    .then(function (response) {
        for (let i = 0; i < response.data.length; i++) {
            let p = response.data[i].path;
            let rp = response.data[i].requirePath;
            if (p) {
                children.push({
                    path: p,
                    component:  function (r) {
                        require.ensure([], function () {
                            return r(require('@/component'+rp))
                        })
                    }
                });
            }
        }
        let routes = [
            {
                name: "root", path: "/", component: home,
                children
            }
        ];
        router.addRoutes(routes)
    });
export default router;