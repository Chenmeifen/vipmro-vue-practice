import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

Vue.prototype.ajax = opt =>
    new Promise( resolve => {
        let config = {
            method: opt.method || 'GET',
            url: opt.url || ''
        };
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
let headers = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

export const getMenuData = () => {
    return axios.get(`${base}loginmenu/getMenuData`)
};
export const getMenuTreeData = () => {
    return axios.get(`${base}loginmenu/getMenuTreeData`)
};
/*OEM编码管理*/
export const getBrandOemList = (brandName)=>{
    return axios.get(`${base}oem/getBrandOemList?brandName=${brandName}`)
};
export const addBrandOem = (brandOem)=>{
    return axios.post(`${base}oem/addBrandOem`, qs.stringify(brandOem), headers)
};
export const updateBrandOem = (brandOem)=>{
    brandOem._method = 'put';
    return axios.post(`${base}oem/updateBrandOem`, qs.stringify(brandOem), headers)
};
export const deleteBrandOem = (id) => {
    return axios.delete(`${base}oem/deleteBrandOem?id=${id}`)
};
// 询价单
export const getInquiryList = (inquiryParam)=>{
    return axios.post(`${base}inquiry/list`, qs.stringify(inquiryParam), headers)
};
export const findBusinessByAuth = ()=>{
    return axios.get(`${base}inquiry/findBusinessByAuth`)
};
export const getSellerGoods = (inquiryParam)=>{
    return axios.post(`${base}inquiry/sellerGoods`, qs.stringify(inquiryParam), headers)
};
export const findDealers = (cusForm)=>{
    return axios.get(`${base}inquiry/findDealers?dealerName=${cusForm.dealerName}&rows=${cusForm.rows}&page=${cusForm.page}`)
};



