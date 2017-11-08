<template>

    <div>
        <el-container>
            <el-header height="38px" class="main-top">Header</el-header>
            <el-container :style="{height: screenHeight+'px'}" class="main">
                <el-aside class="main-menu scrollbar">
                    <el-menu
                            default-active="4"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                            </template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <template v-for="(item, index) in menuData">
                            <template v-if="item.child.length>0">
                                <el-submenu :index="(index+4)+''">
                                    <template slot="title">
                                        <i class="el-icon-menu"></i>
                                        <span>{{item.authName}}</span>
                                    </template>
                                    <template v-for="(childItem, childIdx) in item.child" >
                                        <template v-if="childItem.child && childItem.child.length > 0">
                                            <el-submenu :index="(index+4)+'-'+childIdx">
                                                <template slot="title">{{childItem.authName}}</template>
                                                <template v-for="(childThreeItem, childTreeIdx) in childItem.child">
                                                    <el-menu-item :index="(index+4)+'-'+childIdx+'-'+childTreeIdx" @click="linkTo(childThreeItem.path,childThreeItem.authName)">
                                                        {{childThreeItem.authName}}
                                                    </el-menu-item>
                                                </template>
                                            </el-submenu>
                                        </template>
                                        <template v-else="">
                                            <el-menu-item-group>
                                                <el-menu-item :index="(index+4)+'-'+childIdx" @click="linkTo(childItem.path,childItem.authName)">{{childItem.authName}}</el-menu-item>
                                            </el-menu-item-group>
                                        </template>
                                    </template>
                                </el-submenu >
                            </template>
                            <template v-else="">
                                <el-menu-item  :index="(index+4)+''" @click="linkTo(item.path,item.authName)">
                                    <i class="el-icon-setting"></i>
                                    <span slot="title">
                                            {{item.authName}}
                                    </span>
                                </el-menu-item>
                            </template>
                        </template>
                    </el-menu>
                </el-aside>
                <el-container>
                    <!--<el-header height="30px">-->
                        <!--<h1>{{authName}}</h1>-->
                    <!--</el-header>-->
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
            <el-footer height="38px">
                footer
            </el-footer>
        </el-container>
    </div>
</template>
<style>

    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
    ::-webkit-scrollbar
    {
        width: 2px;
        height: 8px;
        background-color: #ffffff;
    }

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0);
        border-radius: 10px;
        background-color: #FFFFFF;
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #555;
    }

</style>
<script>

    export default {
        data(){
            return {
                menuData: [],
                screenHeight: document.documentElement.clientHeight - 78,
                authName:this.$route.query.authName
            }
        },
        created(){
            let _this = this;
            this.$store.dispatch('initMenuData').then(()=>{
                console.log('dispatch data', this.$store.state.menuData)
            })
            _this.axios.get('http://localhost:8080/emro_boss/loginmenu/getMenuTreeData')
                .then(function (response) {
                    _this.menuData = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            linkTo(path, authName){
                this.authName = authName;
                if(path === 'index'){
                    this.$router.push({path: '/page/index',query:{authName: authName}});
                }else{
                    this.$router.push({path: path, query:{authName: authName}});
                }
                this.$store.commit('increment')

            }
        }
    }
</script>