<template>
    <div>
        <el-form :inline="true" :model="queryForm" size="mini">
            <el-form-item label="品牌名称">
                <el-input type="text" placeholder="品牌名称" v-model="queryForm.brandName"></el-input>
            </el-form-item>
            <el-form-item label="品牌经理">
                <el-select placeholder="品牌经理" v-model="queryForm.staffId">

                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </el-form-item>
        </el-form>
        <div>
            <el-button type="primary" size="medium" @click="dialogVisible=true">新增品牌关系</el-button>
        </div>
        <el-dialog title="品牌经理关系维护" :visible.sync="dialogVisible">
            <el-transfer
                    filterable
                    v-model="selectList"
                    :data="dataList"
                    :titles="['待选品牌', '已选品牌']">
            </el-transfer>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="ensure">确 定</el-button>
            </div>
        </el-dialog>
    </div>

</template>
<script>
    import bossApi from '../../../api'
    export default {
        data(){
            return {
                queryForm: {
                    brandName: '',
                    staffId: '',
                },
                dataList: [],
                selectList: [95],
                dialogVisible: false
            }
        },
        created(){
            bossApi.brandNameList().then((res) => {
                let list = res.data;
                for (let i = 0; i < list.length; i++) {
                    this.dataList.push(
                        {
                            key: list[i].id,
                            label: list[i].brandName,
                        }
                    )
                }
            })
        },
        methods: {
            ensure(){
                console.log(this.selectList)
            },
        }
    }
</script>