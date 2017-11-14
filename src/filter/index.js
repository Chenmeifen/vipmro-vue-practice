/**
 *
 * @author cmf00627
 * @date 2017/11/14
 */
import Vue from 'vue';
let defaultFormat = 'yyyy年MM月dd日 hh:mm:ss'
Vue.filter("dateFormat", (value, format)=>{
    let date = new Date(value);
    if(!format){
        format = defaultFormat;
    }
    let yyyy = date.getFullYear();
    let MM = date.getMonth() + 1;
    let dd = date.getDate();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    format = format.replace('yyyy', yyyy);
    format = format.replace('MM', MM > 9 ? MM : '0' + MM);
    format = format.replace('dd', dd > 9 ? dd : '0' + dd);
    format = format.replace('hh', hh > 9 ? hh : '0' + hh);
    format = format.replace('mm', mm > 9 ? mm : '0' + mm);
    format = format.replace('ss', ss > 9 ? ss : '0' + ss);
    return format;

});
export default {}