<template>
    <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="品牌名称">
                <el-input v-model="formInline.brandName" placeholder="品牌名称"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="formInline.isGener" placeholder="状态">
                    <el-option label="已完成" value="1"></el-option>
                    <el-option label="未生成" value="0"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>

            </el-form-item>
        </el-form>
        <el-button type="primary" @click="handleAdd">新增品牌</el-button>
        <el-table
                :data="brandList"
                style="width: 100%"
                :row-class-name="tableRowClassName"
                :header-row-style="headerRowStyle">
            <el-table-column
                    prop="brandName"
                    label="品牌名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="brandCode"
                    label="品牌编码"
                    width="180">
            </el-table-column>
            <el-table-column
                    label="创建时间">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.createTime | dateFormat }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="状态">
                <template slot-scope="scope">
                    <span>{{ scope.row.isGener | isGenderStr }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope" v-if="scope.row.isGener!=1">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" width="634px">
            <el-form :model="brandForm" :rules="rules" ref="brandForm">
                <el-form-item label="品牌名称" label-width="80px" prop="brandName">
                    <el-input v-model="brandForm.brandName"></el-input>
                </el-form-item>
                <el-form-item label="品牌编码" label-width="80px" prop="brandCode">
                    <el-input v-model="brandForm.brandCode"></el-input>
                </el-form-item>
                <div class="tip">
                    <span>
                        使用0~9，26个字母中的一个，I、O、B、Z字母不可用，字母使用大写
                    </span>
                </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveBrand">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<style>
    .tip {
        color: red;
        text-align: center;
        font-size: 12px;
    }
</style>
<script>
    import bossApi from '../../../api'
    export default {
        data(){
            return {
                brandFormName: "brandForm",
                dialogTitle: '新增品牌',
                formInline: {
                    brandName: '',
                    isGener: ''
                },
                brandForm: {
                    id: '',
                    brandName: '',
                    brandCode: ''
                },
                brandList: [],
                rules: {
                    brandName: [
                        {required: true, message: "请输入品牌名称", trigger: "blur"}
                    ],
                    brandCode: [
                        {required: true, message: "请输入品牌代码", trigger: "blur"}
                    ]
                },
                dialogFormVisible: false
            }
        },
        created(){
            this.onSubmit();
        },
        methods: {
            onSubmit(){
                bossApi.getBrandOemList(this.formInline.brandName).then((res) => {
                    this.brandList = res.data;
                })
            },
            saveBrand(){
                this.$refs[this.brandFormName].validate((valid) => {
                    if (valid) {
                        let rtnFn = (res) => {
                            if (res.data.code === 0) {
                                this.dialogFormVisible = false;
                                this.onSubmit();
                                this.$message({
                                    type: "success",
                                    message: "保存成功"
                                })
                            } else {
                                this.$message({
                                    type: "error",
                                    message: res.data.msg ? res.data.msg : "保存失败"
                                })
                            }
                        };
                        if (this.brandForm.id) {
                            bossApi.updateBrandOem(this.brandForm).then((res) => {
                                rtnFn(res);
                            });
                        } else {
                            bossApi.addBrandOem(this.brandForm).then((res) => {
                                rtnFn(res);
                            });
                        }


                    } else {

                    }
                })
            },
            handleEdit(index, row){
                this.resetForm();
                this.brandForm.brandName = row.brandName;
                this.brandForm.brandCode = row.brandCode;
                this.brandForm.id = row.id;
                this.dialogFormVisible = true;
                this.dialogTitle = '编辑品牌';
            },
            handleDelete(index, row){
                this.$confirm("确定要执行删除操作？", "提示", {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    bossApi.deleteBrandOem(row.id).then((res) => {
                        if (res.data.code === 0) {
                            this.onSubmit();
                            this.$message({
                                type: "success",
                                message: "删除成功"
                            })
                        } else {
                            this.$message({
                                type: "error",
                                message: "删除失败"
                            })
                        }
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                })

            },
            handleAdd(){
                this.resetForm();
                this.dialogFormVisible = true;
                this.dialogTitle = '新增品牌';
            },
            resetForm(){
                this.brandForm = {
                    id: '',
                    brandName: '',
                    brandCode: ''
                };
                if (this.$refs[this.brandFormName]) {
                    this.$refs[this.brandFormName].resetFields();
                }

            },
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
            headerRowStyle({row, rowIndex}){

//                console.log(rowIndex, row);
                // todo how to do
            }
        },
        filters: {
            isGenderStr(value){
                if (value === '1') {
                    return '已生成'
                }
                return '未生成'
            }
        }
    }
</script>