export default{
    install(Vue){

        Vue.prototype.$postMessage = ( message, target_url, target) => {
            if ( !target_url ) { return; }
            message = typeof message === 'string' ? message : JSON.stringify( message );
            target = target || parent;
            target.postMessage( message, target_url);
        };

        Vue.prototype.$receiveMessage = ( callback, source_origin, delay ) =>{
            if(!window.postMessage) return;
            if(callback){

                let rm_callback = (e) => typeof source_origin === 'string' ? callback(e) : console.log('source_origin不是字符串');

                if( window.addEventListener) {
                    window[ callback ? 'addEventListener' : 'removeEventListener' ]( 'message', rm_callback, false );
                } else {
                    window[ callback ? 'attachEvent' : 'detachEvent' ]( 'onmessage', rm_callback );
                }

            } 

        };
    }
}