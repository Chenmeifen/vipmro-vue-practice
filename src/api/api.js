import Vue from 'vue'
import axios from 'axios'

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

let base = '/api/';

export const getMenuData = () => { return axios.get(`${base}loginmenu/getMenuData`) };
export const getMenuTreeData = () => { return axios.get(`${base}loginmenu/getMenuTreeData`) };




