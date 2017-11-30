<template>
    <div>

        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/page/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/page/inquirySheet/inquirySheetList' }">询价单列表</el-breadcrumb-item>
            <el-breadcrumb-item>发起询价单</el-breadcrumb-item>
        </el-breadcrumb>
        <br>
        <br>
        <br>
        <el-input type="textarea" v-model="loginName"></el-input>
        <el-input class="heightB" type="textarea" v-model="resMsg"></el-input>
        <br>
        <br>
        <br>
        <el-button type="primary" plain>发起询价单</el-button>
        <el-button @click="getMsg" type="primary" plain>返回数据</el-button>

        <div>
            <iframe class="iframe" src="http://127.0.0.1:8010/" border="1" width="1000" height="200"></iframe>
        </div>
    </div>
</template>
<style>
    .heightB textarea{
        height: 300px;
    }
</style>
<script>
    export default {
        data(){
            return{
                loginName:'crm',
                resMsg:'init',
                url: "http://127.0.0.1:8010/",
            }
        },
        created(){
        },
        methods:{
            postMsg(){
                let iframe = this.$el.querySelector(".iframe").contentWindow;
                this.resMsg += "\nwaiting";
                this.$postMessage({loginName: this.loginName}, this.url, iframe);
            },
            getMsg(){
                this.postMsg()
                this.$receiveMessage((res)=>{
                    console.log("rtn", res)
                    this.$data.resMsg += '|' + JSON.parse(res).resMsg
                }, this.url)
            }
        }
    }
</script>