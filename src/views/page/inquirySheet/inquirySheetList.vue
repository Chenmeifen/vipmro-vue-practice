<template>
    <div>

        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/page/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>询价单列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
            <el-form-item label="询价客户">
                <el-input v-model="formInline.dealerName" placeholder="询价客户"></el-input>
            </el-form-item>
            <el-form-item label="提交时间">
                <el-date-picker
                        v-model="formInline.startCreatedAt"
                        type="date"
                        placeholder="开始时间"
                        value-format="yyyy-MM-dd"
                        :picker-options="pickerOptions0">
                </el-date-picker>
                -
                <el-date-picker
                        v-model="formInline.endCreatedAt"
                        type="date"
                        placeholder="结束时间"
                        value-format="yyyy-MM-dd"
                        :picker-options="pickerOptions0">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="单号">
                <el-input v-model="formInline.id" placeholder="单号"></el-input>
            </el-form-item>
            <el-form-item label="订货号/型号">
                <el-input v-model="formInline.queryNo" placeholder="订货号/型号"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="formInline.handleStatus" clearable placeholder="状态">
                    <el-option label="待提交" value="0"></el-option>
                    <el-option label="待处理" value="1"></el-option>
                    <el-option label="处理中" value="2"></el-option>
                    <el-option label="处理完成" value="3"></el-option>
                    <el-option label="已关闭" value="4"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="创建人">
                <el-select v-model="formInline.createdBy" placeholder="创建人" clearable>
                    <el-option v-for="item in creatorList" :value="item.id" :label="item.staffName"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <div>
            <el-button type="primary" @click="linkTo" size="small">发起询价单</el-button>
        </div>
        <br>
        <el-table
                :data="inquiryList"
                highlight-current-row
                border
                @current-change="handleCurrentChange"
                ref="singleTable"
                style="width: 100%" size="mini">
            <el-table-column
                    prop="id"
                    label="单号"
                    width="60">
            </el-table-column>
            <el-table-column
                    prop="dealerName"
                    label="询价客户"
                    width="260">
            </el-table-column>
            <el-table-column
                    label="提交时间" width="140px">
                <template slot-scope="scope">
                    <span>{{ scope.row.createdAt | dateFormat }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="状态" width="90">
                <template slot-scope="scope">
                    <span>{{ scope.row.handleStatus | handleStatsTrans }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="询价处理时间" width="140px">
                <template slot-scope="scope">
                    <span>{{ scope.row.updatedAt | dateFormat }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="creatorName"
                    label="创建人" width="180">
            </el-table-column>
            <el-table-column
                    prop="remark"
                    label="备注">
            </el-table-column>
            <el-table-column
                    label="操作" width="80px">
                <template slot-scope="scope" v-if="scope.row.isCanRevoke==1">
                    <el-button type="danger"
                               size="mini"
                               @click="handleRevoke(scope.$index, scope.row)">撤回
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block" style="text-align: right">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="curPage"
                    :page-sizes="[10, 20, 50, 100]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<style>

    .el-breadcrumb {
        height: 38px;
        margin-bottom: 6px;
    }

    .select-bg {
        background: #8bc3ff;
    }
</style>

<script>
    import bossApi from '../../../api'
    export default {
        data() {
            return {
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    }
                },
                formInline: {
                    page: 0,
                    rows: 10,
                    startCreatedAt: '',
                    endCreatedAt: '',
                    queryNo: '',
                    id: '',
                    dealerName: '',
                    handleStatus: '',
                    createdBy: '',
                },
                inquiryList: [],
                creatorList: [],
                total: 0,
                curPage: 0,
                currentRow: null
            }
        },
        created(){
            bossApi.findBusinessByAuth().then((res) => {
                this.creatorList = res.data;
                this.onSubmit();
            });
        },
        methods: {
            onSubmit() {
                bossApi.getInquiryList(this.formInline).then((res) => {
                    this.inquiryList = res.data.list;
                    this.total = res.data.count
                })
            },
            handleCurrentChange(val){
                if (val > 0) {
                    this.formInline.page = val - 1;
                    this.onSubmit();
                }
            },
            handleSizeChange(val){
                this.formInline.rows = val;
                this.onSubmit();
            },
            linkTo(){
                this.$router.push({path: "/page/inquirySheet/addinquirySheet", query: {authName: "发起询价单"}});
            }
        },
        filters: {
            handleStatsTrans(value){
                switch (value) {
                    case 0:
                        return '待提交';
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