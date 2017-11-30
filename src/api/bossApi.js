import {apiGet, apiDelete, apiPost} from './axiosUtil'

let base = '/emro_boss/';

export const getMenuData = () => {
    return apiGet(`${base}loginmenu/getMenuData`)
};
export const getMenuTreeData = () => {
    return apiGet(`${base}loginmenu/getMenuTreeData`)
};
/*OEM编码管理*/
export const getBrandOemList = (brandName) => {
    return apiGet(`${base}oem/getBrandOemList?brandName=${brandName}`)
};
export const addBrandOem = (brandOem) => {
    return apiPost(`${base}oem/addBrandOem`, brandOem);
};
export const updateBrandOem = (brandOem) => {
    brandOem._method = 'put';
    return apiPost(`${base}oem/updateBrandOem`, brandOem);
};
export const deleteBrandOem = (id) => {
    return apiDelete(`${base}oem/deleteBrandOem?id=${id}`)
};
// 询价单
export const getInquiryList = (inquiryParam) => {
    return apiPost(`${base}inquiry/list`, inquiryParam);
};
export const findBusinessByAuth = () => {
    return apiGet(`${base}inquiry/findBusinessByAuth`)
};
export const getSellerGoods = (inquiryParam) => {
    return apiPost(`${base}inquiry/sellerGoods`, inquiryParam);
};
export const findDealers = (cusForm) => {
    return apiGet(`${base}inquiry/findDealers?dealerName=${cusForm.dealerName}&rows=${cusForm.rows}&page=${cusForm.page}`)
};

export const findBusinessByPurchase = () => {
    return apiGet(`${base}inquiry/findBusinessByPurchase`)
};

export const getInquiryGoodsList = (queryParam) => {
    return apiPost(`${base}inquiry/goodsList`, queryParam);
};

export const curPurchaseBrand = () => {
    return apiGet(`${base}purchaseBrand/curPurchaseBrand`)
};

export const brandNameList = () => {
    return apiGet(`${base}brandRelation/brandNameList`)
};


// Vue.prototype.ajax = opt =>
//     new Promise(resolve => {
//         let config = {
//             method: opt.method || 'GET',
//             url: opt.url || ''
//         };
//         if (opt.method && opt.method === 'POST') {
//             config.data = opt.data || {};
//         } else {
//             config.params = opt.data || {};
//         }
//         axios(config).then(res => {
//             if (res && res.data) {
//                 if (res.data.code === 200) {
//                     resolve(res.data);
//                 }
//             }
//         }).catch(error => console.log('接口异常'));
//
//     });



