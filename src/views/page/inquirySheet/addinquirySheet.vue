<template>
    <div>
        <div>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="询价客户">
                    <el-input v-model="formInline.dealerName" placeholder="询价客户" disabled></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" plain @click="selectCus" >选择客户</el-button>
                </el-form-item>
            </el-form>
            <div>
                <el-input type="textarea" v-model="queryInfo" style="width:40%" :rows="6"
                          placeholder="输入格式：“订货号”/“型号”,“数量”;">
                </el-input>
                <el-button plain @click="addSellerGoods">添加商品</el-button>
            </div>
        </div>
        <el-table :data="sellerGoodsList" style="width:100%">
            <el-table-column prop="buyNo" label="订货号"></el-table-column>
            <el-table-column prop="model" label="型号"></el-table-column>
            <el-table-column prop="brandName" label="品牌"></el-table-column>
            <el-table-column prop="num" label="数量"></el-table-column>
            <el-table-column prop="skuUnit" label="单位"></el-table-column>
            <el-table-column prop="stock" label="库存"></el-table-column>
            <el-table-column prop="marketPrice" label="面价"></el-table-column>
            <el-table-column prop="giveBean" label="可赠豆"></el-table-column>
            <el-table-column label="单价">
                <template slot-scope="scope">
                    <span>{{scope.row.salePrice}}</span>
                    <span v-if="scope.row.isSale==1">(<span style="color: #FA5555">清</span>)</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <i class="el-icon-delete" @click="removeCurRow(scope.$index, scope.row)"></i>
                </template>
            </el-table-column>
        </el-table>
        <div>
            <el-input type="textarea" v-model="remark" style="width:40%" placeholder="备注">

            </el-input>
            <div style="text-align: center">
                <el-button type="primary" @click="buildInquirySheet">生成询价单</el-button>
            </div>
        </div>
        <br>
        <el-dialog title="询价客户" :visible.sync="dialogTableVisible" top="5vh" >
            <el-form :inline="true" :model="cusForm" class="demo-form-inline" size="small">
                <el-form-item label="客户名称">
                    <el-input v-model="cusForm.dealerName" placeholder="客户名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="el-icon-search" size="small" @click="queryCus">查询</el-button>
                </el-form-item>
            </el-form>
            <el-table :data="cusData" size="small"
                      highlight-current-row
                      @row-dblclick="selectOneCus"
                      @current-change="currentChange">
                <el-table-column property="dealerName" label="客户名称" width="280"></el-table-column>
                <el-table-column property="rankName" label="客户等级" width="120"></el-table-column>
                <el-table-column property="serviceName" label="商务专员"></el-table-column>
                <el-table-column property="manageName" label="客户专员"></el-table-column>
            </el-table>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="0"
                    :page-sizes="[10, 20, 50, 100]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="cusCount">
            </el-pagination>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogTableVisible = false">取 消</el-button>
                <el-button type="primary" @click="selectOneCus">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import bossApi from '../../../api'
    export default {
        data(){
            return {
                formInline:{
                    dealerName: ''
                },
                cusForm: {
                    page: 0,
                    rows: 10,
                    dealerName: '',
                },
                queryInfo:'',
                sellerGoodsList:[],
                cusData:[],
                cusCount:0,
                remark:'',
                selectOneRow:null,
                dialogTableVisible: false
            }
        },
        methods:{
            onSubmit(){

            },
            addSellerGoods(){
                let str = this.queryInfo.trim().replace(/' '+/g, ' ');
                str = str.replace(/\t+/g, ' ');
                if(!str){
                    this.$message({
                        "type": "error",
                        "message": "请输入数据"
                    });
                    return;
                }
                let list = str.split("\n");
                let queryInfo = [];
                for(let i = 0; i < list.length; i++){
                    let ss = list[i].trim().replace(' ', ',').replace('，', ',');
                    if(!ss){
                        continue;
                    }
                    let arr = ss.split(",");
                    let noEmpArr = [];
                    for(let k = 0; k < arr.length; k++){
                        if(arr[k].trim()){
                            noEmpArr.push(arr[k].trim())
                        }
                    }
                    if(noEmpArr.length === 2){
                        queryInfo.push(
                            {
                                queryNo: noEmpArr[0].trim(), num: noEmpArr[1].trim()
                            }
                        )
                    }else{
                        this.$message({
                            "type": "error",
                            "message": "格式有误"
                        });
                        return;
                    }
                }
                bossApi.getSellerGoods({queryList: JSON.stringify(queryInfo)}).then((res) => {
                    this.sellerGoodsList = res.data.data;
                })
            },
            removeCurRow(rowIndex, row){
                this.sellerGoodsList.splice(rowIndex, 1)
            },
            buildInquirySheet(){

            },
            queryCus(){
                bossApi.findDealers(this.cusForm).then((res) => {
                    this.cusData = res.data.list;
                    this.cusCount = res.data.count;
                })
            },
            selectCus(){
                this.dialogTableVisible = true;
                this.queryCus();
            },
            handleSizeChange(rows){
                this.cusForm.rows = rows;
                this.queryCus();
            },
            handleCurrentChange(val){
                if(val > 0){
                    this.cusForm.page = val - 1;
                    this.queryCus();
                }
            },
            selectOneCus(row){
                if(row.dealerName){
                    this.formInline.dealerName = row.dealerName;
                }else{
                    this.formInline.dealerName = this.selectOneRow.dealerName;
                }
                this.dialogTableVisible = false;
            },
            currentChange(cur, old){
                this.selectOneRow = cur;
            }
        }
    }
</script>