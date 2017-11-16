<template>
    <div>
        <el-form :inline="true" :model="queryForm" size="mini">
            <el-form-item label="批次号">
                <el-input v-model="queryForm.batchNo" placeholder="批次号"></el-input>
            </el-form-item>
            <el-form-item label="订货号/型号">
                <el-input v-model="queryForm.queryNo" placeholder="订货号/型号"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="queryForm.handleStatus" placeholder="处理状态" clearable>
                    <el-option value="1" label="待处理"></el-option>
                    <el-option value="2" label="处理中"></el-option>
                    <el-option value="3" label="处理完成"></el-option>
                    <el-option value="4" label="已关闭"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="品牌">
                <el-select v-model="queryForm.brandId" placeholder="请选择品牌" clearable filterable>
                    <el-option v-for="item in purchaseBrandList" :value="item.brandId"
                               :label="item.brandName"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="咨询类型">
                <el-select v-model="queryForm.inquiryType" placeholder="请选择咨询类型" clearable>
                    <el-option value="1" label="询货期"></el-option>
                    <el-option value="2" label="询货期价格"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="商务">
                <el-select v-model="queryForm.createdBy" placeholder="请选择商务" multiple filterable>
                    <el-option v-for="item in createdByList" :value="item.id" :label="item.staffName"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search" @click="queryListFn">查询</el-button>
                <el-button type="primary" icon="el-icon-upload">导出</el-button>
                <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :file-list="fileList">
                    <el-button type="primary" icon="el-icon-download">导入</el-button>
                </el-upload>
            </el-form-item>
        </el-form>
        <el-table :data="inquiryGoodsList"
                  ref="multipleTable"
                  style="width: 100%" size="mini"
                  :row-style="rowStyle"
                  :row-class-name="rowClassName">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="品牌名称："><span>{{props.row.brandName}}</span></el-form-item>
                        <el-form-item label="商品名称："><span>{{props.row.goodsName}}</span></el-form-item>
                        <el-form-item label="商务："><span>{{props.row.businessName}}</span></el-form-item>
                        <el-form-item label="采购："><span>{{props.row.purchaseName}}</span></el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column label="提交时间" width="140">
                <template slot-scope="scope">
                    <span>{{scope.row.createdAt | dateFormat }}</span>
                </template>
            </el-table-column>
            <el-table-column label="品牌名称" prop="brandName"></el-table-column>
            <el-table-column label="订货号" prop="buyNo"></el-table-column>
            <el-table-column label="型号" prop="model"></el-table-column>
            <el-table-column label="状态">
                <template slot-scope="scope">
                    <span>{{scope.row.handleStatus | handleStatusTrans }}</span>
                </template>
            </el-table-column>
            <el-table-column label="处理时间" width="140">
                <template slot-scope="scope">
                    <span>{{scope.row.updatedAt | dateFormat }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button v-if="scope.row.handleStatus!=4" plain size="mini">
                        上传附件
                        <i class="el-icon-upload el-icon--right"></i>
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block" style="text-align: right">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="0"
                    :page-sizes="[10, 15, 20, 50, 100]"
                    :page-size="15"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="count">
            </el-pagination>
        </div>
    </div>
</template>
<style>
    .demo-table-expand {
        font-size: 0;
        margin-left: 64px;
    }

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 40%;
    }

    .disabledRow .el-checkbox__input {
        display: none;
    }
    .upload-demo{
        display: inline-block;
        margin-left: 12px;
    }
</style>
<script>
    import bossApi from '../../../api'
    export default {
        data(){
            return {
                queryForm: {
                    page: 0,
                    rows: 15,
                    batchNo: '',
                    handleStatus: '1',
                    queryNo: '',
                    brandId: '',
                    inquiryType: '',
                    createdBy: '',
                },
                purchaseBrandList: [],
                createdByList: [],
                inquiryGoodsList: [],
                count: 0
            }
        },
        created(){
            bossApi.curPurchaseBrand().then((res) => {
                this.purchaseBrandList = res.data
            });
            bossApi.findBusinessByPurchase().then((res) => {
                this.createdByList = res.data
            });
            this.queryListFn();
        },
        methods: {
            queryListFn(){
                bossApi.getInquiryGoodsList(this.queryForm).then((res) => {
                    this.inquiryGoodsList = res.data.list;
                    this.count = res.data.count;
                })
            },
            handleCurrentChange(val){
                if (val > 0) {
                    this.queryForm.page = val - 1;
                    this.queryListFn();
                }
            },
            handleSizeChange(val){
                this.queryForm.rows = val;
                this.queryListFn();
            },
            rowStyle({row, rowIndex}){
                if (row.handleStatus === 4) {
                    return {
                        'background-color': '#c3c3c3'
                    }
                }
            },
            rowClassName({row, rowIndex}){
                if (row.handleStatus === 4) {
                    return 'disabledRow'
                }
            }
        },
        filters: {
            handleStatusTrans(value){
                switch (value) {
                    case 1:
                        return '待处理';
                    case 2:
                        return '处理中';
                    case 3:
                        return '处理完成';
                    case 4:
                        return '已关闭';
                }
                return '';
            }
        }
    }
</script>