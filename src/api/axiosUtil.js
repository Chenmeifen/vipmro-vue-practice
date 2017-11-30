/**
 * axios 封装
 * @author cmf00627
 * @date 2017/11/30
 */

import axios from 'axios'
import qs from 'qs'

let headers = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

export let apiGet = url => {
    return new Promise((resolve, reject) => {
        axios.get(url).then((response) => {
            resolve(response.data)
        }).catch((response) => {
            console.log('get', response)
        })
    })
};
export let apiDelete = url => {
    return new Promise((resolve, reject) => {
        axios.delete(url).then((response) => {
            resolve(response.data)
        }).catch((response) => {
            console.log('delete', response)
        })
    })
};

export let apiPost = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data), headers).then((response) => {
            resolve(response.data)
        }).catch((response) => {
            console.log('post', response)
        })
    })
};