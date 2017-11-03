<template>
    <div>
        <el-row class="tac">
            <el-col :span="4">
                <el-menu
                        default-active="5-0"
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
                                            <el-menu-item index="1-4-1">todo 第三级</el-menu-item>
                                        </el-submenu>
                                    </template>
                                    <template v-else="">
                                        <el-menu-item-group>
                                            <el-menu-item :index="(index+4)+'-'+childIdx">{{childItem.authName}}</el-menu-item>
                                        </el-menu-item-group>
                                    </template>
                                </template>
                            </el-submenu >
                        </template>
                        <template v-else="">
                            <el-menu-item  :index="(index+4)+''">
                                <i class="el-icon-setting"></i>
                                <span slot="title">{{item.authName}}</span>
                            </el-menu-item>
                        </template>
                    </template>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                menuData: []
            }
        },
        created(){
            let _this = this;
            _this.axios.get('http://localhost:8080/emro_boss/login/getMenuData')
                .then(function (response) {
                    _this.menuData = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });

//            this.ajax({
//                url:"http://localhost:8080/emro_boss/login/getMenuData",
//                data:{},
//                method:"get",
//                dataType:'jsonp',
//                processData: false,
//                success:function (data) {
//                    alert('tt');
//                    console.log(data);
//                    this.menuData = data;
//                }
//            })
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>