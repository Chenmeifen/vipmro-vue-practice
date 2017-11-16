<template>

    <div>
        <el-container>
            <el-header height="38px" class="main-top">Header</el-header>
            <el-container  class="main">
                <el-aside class="main-menu scrollbar" :style="{height: screenHeight+'px'}">
                    <el-menu
                            :default-active="$route.path"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <template v-for="(item, index) in menuData">
                            <template v-if="item.child.length>0">
                                <el-submenu :key="index" :index="(index + 4) + ''">
                                    <template slot="title">
                                        <i class="el-icon-menu"></i>
                                        <span>{{item.authName}}</span>
                                    </template>
                                    <template v-for="(childItem, childIdx) in item.child" >
                                        <template v-if="childItem.child && childItem.child.length > 0">
                                            <el-submenu :index="(index + 4) + '-' + childIdx">
                                                <template slot="title">{{childItem.authName}}</template>
                                                <template v-for="(childThreeItem, childTreeIdx) in childItem.child">
                                                    <el-menu-item :index="childThreeItem.path" @click="linkTo(childThreeItem.path,childThreeItem.authName)">
                                                        {{childThreeItem.authName}}
                                                    </el-menu-item>
                                                </template>
                                            </el-submenu>
                                        </template>
                                        <template v-else="">
                                            <el-menu-item-group>
                                                <el-menu-item :index="childItem.path" @click="linkTo(childItem.path,childItem.authName)">{{childItem.authName}}</el-menu-item>
                                            </el-menu-item-group>
                                        </template>
                                    </template>
                                </el-submenu >
                            </template>
                            <template v-else="">
                                <el-menu-item :key="index"  :index="item.path" @click="linkTo(item.path,item.authName)">
                                    <i class="el-icon-setting"></i>
                                    <span slot="title">
                                            {{item.authName}}
                                    </span>
                                </el-menu-item>
                            </template>
                        </template>
                    </el-menu>
                </el-aside>
                <el-container :style="{height: screenHeight+'px'}">
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
    .el-menu{

    }
/*
    !*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*!
    ::-webkit-scrollbar
    {
        width: 2px;
        height: 8px;
        background-color: #ffffff;
    }

    !*定义滚动条轨道 内阴影+圆角*!
    ::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0);
        border-radius: 10px;
        background-color: #FFFFFF;
    }

    !*定义滑块 内阴影+圆角*!
    ::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #555;
    }*/

</style>
<script>

    export default {
        data(){
            return {
                menuData: [
                    {
                        "child": [],
                        "authName": "首页",
                        "path": "/page/index",
                        "iconCls": ""
                    },
//                    {
//                        "child": [
//                            {
//                                "child": [],
//                                "authName": "问答首页",
//                                "path": "index",
//                                "iconCls": ""
//                            },
//                            {
//                                "child": [],
//                                "authName": "目录权限",
//                                "path": "index",
//                                "iconCls": ""
//                            }
//                        ],
//                        "authName": "boss问答",
//                        "path": "",
//                        "iconCls": ""
//                    },
                    {
                        "child": [
                            {
                                "child": [
                                    {
                                        "child": [],
                                        "authName": "新增商品SKU导入",
                                        "path": "/page/commodity/CommodityAddSKU",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "修改商品SKU导入",
                                        "path": "/page/commodity/CommodityEditSKU",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "基础数据导出",
                                        "path": "/page/commodity/CommodityProductList-select?type=2&",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "分类管理",
                                        "path": "/page/commodity/CommodityClassification",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "产品列表查询",
                                        "path": "/page/commodity/CommodityProductList-select",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "产品列表操作",
                                        "path": "/page/commodity/CommodityProductList",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "品牌管理",
                                        "path": "/page/commodity/CommodityBrand",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "分类属性导入",
                                        "path": "/page/commodity/CommodityClassAttribute",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "分类属性查询",
                                        "path": "/page/commodity/CommodityClassAttribute?type=2&",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "品牌授权",
                                        "path": "/page/commodity/commodityGrant",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "供应商仓库维护",
                                        "path": "/page/commodity/supplierUphold",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "临时数据修改",
                                        "path": "/page/commodity/commodityTemList",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "临时数据新增",
                                        "path": "/page/commodity/commodityTemNew",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "供应商ID同步",
                                        "path": "/page/commodity/supplierList",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "品牌证书管理",
                                        "path": "/page/commodity/managementBrand",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "运费管理",
                                        "path": "/page/commodity/freightManagement",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "京东商品",
                                        "path": "/page/commodity/jingdong",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "第二套分类",
                                        "path": "/page/commodity/brandClassification",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "轴承查看",
                                        "path": "/page/commodity/bearingView",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "运费管理（物流）",
                                        "path": "/page/commodity/freightLogistics",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "商品编码查询",
                                        "path": "/page/commodity/CommoditySelectCode",
                                        "iconCls": ""
                                    }
                                ],
                                "authName": "基础数据",
                                "path": "",
                                "iconCls": ""
                            },
                            {
                                "child": [
                                    {
                                        "child": [],
                                        "authName": "OEM品牌维护",
                                        "path": "/page/commodity/OEMbrand",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "分类维护",
                                        "path": "/page/commodity/OEMClassified",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "订货号生成",
                                        "path": "/page/commodity/OEMOrderNumber",
                                        "iconCls": ""
                                    }
                                ],
                                "authName": "OEM编码管理",
                                "path": "",
                                "iconCls": ""
                            }
                        ],
                        "authName": "产品中心",
                        "path": "",
                        "iconCls": ""
                    },
                    {
                        "child": [
                            {
                                "child": [],
                                "authName": "询价单列表",
                                "path": "/page/inquirySheet/inquirySheetList",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "发起询价单",
                                "path": "/page/inquirySheet/addinquirySheet",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "待处理的询价单",
                                "path": "/page/inquirySheet/pendingInquirySheet",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "询价汇总",
                                "path": "/page/inquirySheet/inquirySummary",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "询价量统计",
                                "path": "/page/inquirySheet/quotationStatistics",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "采购品牌关系",
                                "path": "/page/inquirySheet/purchasingBrand",
                                "iconCls": ""
                            }
                        ],
                        "authName": "询价单",
                        "path": "",
                        "iconCls": ""
                    },
                    {
                        "child": [
                            {
                                "child": [],
                                "authName": "新建订单",
                                "path": "/page/order/manualOrder",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "待客服审核（手工单）",
                                "path": "/page/order/OrderCustomer",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "待主管审核（手工单）",
                                "path": "/page/order/OrderExamine",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "待付款订单",
                                "path": "/page/order/orderPay",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "待确认付款",
                                "path": "/page/order/PaymentSure",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "待发货订单",
                                "path": "/page/order/orderShipped",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "订单列表",
                                "path": "/page/order/selectOrder",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "原始订单列表",
                                "path": "/page/order/originalOrder",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "库存查询",
                                "path": "/page/order/orderSelected",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "新增商品",
                                "path": "/page/order/orderAddGoods",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "付款单列表",
                                "path": "/page/order/OrderPayment",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "批量报价",
                                "path": "/page/order/batchQuote",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "付款单待发起",
                                "path": "/page/order/paymentOrderno",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "待主管审核付款单",
                                "path": "/page/order/SupervisorOrderno",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "订单未结清",
                                "path": "/page/order/financeNo",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "未审核付款单列表",
                                "path": "/page/order/paymentBill",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "余额转出发起",
                                "path": "/page/order/balanceTransfer",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "余额转出列表",
                                "path": "/page/order/balanceTransferList",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "余额转出审核",
                                "path": "/page/order/balanceExamine",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "线下银行查询",
                                "path": "/page/order/bankOffline",
                                "iconCls": ""
                            }
                        ],
                        "authName": "销售中心",
                        "path": "",
                        "iconCls": ""
                    },
                    {
                        "child": [
                            {
                                "child": [
                                    {
                                        "child": [],
                                        "authName": "上架商品列表",
                                        "path": "/page/commodity/commodityList",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "上架SKU商品修改",
                                        "path": "/page/commodity/CommodityMountingEditSKU",
                                        "iconCls": ""
                                    }
                                ],
                                "authName": ".Net",
                                "path": "",
                                "iconCls": ""
                            },
                            {
                                "child": [
                                    {
                                        "child": [],
                                        "authName": "商城上架中心",
                                        "path": "/page/commodity/SellerGoodsList",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "商城上架商品修改",
                                        "path": "/page/commodity/ShoppingGoods",
                                        "iconCls": ""
                                    }
                                ],
                                "authName": ".Com",
                                "path": "",
                                "iconCls": ""
                            }
                        ],
                        "authName": "上架中心",
                        "path": "",
                        "iconCls": ""
                    },
                    {
                        "child": [
                            {
                                "child": [],
                                "authName": "财务确认",
                                "path": "/page/finance/financeConfirm",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "财务订单统计",
                                "path": "/page/chartReport/financialCount",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "地推销售明细",
                                "path": "/page/chartReport/crmOrderDetail",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "当月订单发货时间报表",
                                "path": "/page/finance/orderDeliveryTime",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "财务当月确认到款",
                                "path": "/page/finance/orderMoneyMouth",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "1贷通支付订单",
                                "path": "/page/finance/loanThrough",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "1贷通打款确认",
                                "path": "/page/finance/loanThroughSure",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "增值税专用发票",
                                "path": "/page/finance/invoiceVAT",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "发票快递导入",
                                "path": "/page/finance/importInvoice",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "余额转出确认",
                                "path": "/page/finance/balanceSure",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "收款单",
                                "path": "/page/finance/receiptList",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "已确认付款单",
                                "path": "/page/finance/confirmationPayment",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "虚拟卡号",
                                "path": "/page/finance/virtualCardList",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "出库单列表",
                                "path": "/page/finance/orderOutboundList",
                                "iconCls": ""
                            }
                        ],
                        "authName": "财务中心",
                        "path": "",
                        "iconCls": ""
                    },
                    {
                        "child": [
                            {
                                "child": [],
                                "authName": "客户下单统计",
                                "path": "/page/chartReport/buyerOrderNum",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "品牌销售统计",
                                "path": "/page/chartReport/brandOrderNum",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "地推销售统计",
                                "path": "/page/chartReport/manageOrderNum",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "商品销售统计",
                                "path": "/page/chartReport/goodsOrderNum",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "新增用户统计",
                                "path": "/page/chartReport/newUserCount",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "用户活跃数",
                                "path": "/page/chartReport/huoyuedu",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "订单数统计",
                                "path": "/page/chartReport/order",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "下单用户转化率",
                                "path": "/page/chartReport/zhuanhualv",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "重复下单率",
                                "path": "/page/chartReport/chongfuxiadanlv",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "销售营业额",
                                "path": "/page/chartReport/yingyeE",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "商品分类销售统计",
                                "path": "/page/chartReport/goodsCategory",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "商品系列销售统计",
                                "path": "/page/chartReport/goodsSeries",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "关键词搜索日志",
                                "path": "/page/chartReport/keywordCount",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "客单价统计",
                                "path": "/page/chartReport/kedanjia",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "首单",
                                "path": "",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "热卖SKU",
                                "path": "/page/chartReport/hotSKU",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "线上推广统计",
                                "path": "/page/chartReport/lineUp",
                                "iconCls": ""
                            }
                        ],
                        "authName": "运营报表",
                        "path": "",
                        "iconCls": ""
                    },
                    {
                        "child": [
                            {
                                "child": [],
                                "authName": "会员阶梯价",
                                "path": "/page/finance/memberPrice",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "早市",
                                "path": "/page/activitycenter/morningList",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "热卖推荐",
                                "path": "/page/operationCenter/hotRecommend",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "直播",
                                "path": "/page/operationCenter/live/livePlatform",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "广告列表统计",
                                "path": "/page/operationCenter/AdList",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "热卖推荐统计",
                                "path": "/page/operationCenter/recommendedStatistics",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "工豆充值申请",
                                "path": "/page/operationCenter/gongdou/rechargeApplication",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "工豆充值确认",
                                "path": "/page/operationCenter/gongdou/rechargeConfirmation",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "早市统计",
                                "path": "/page/operationCenter/statisticsMarket",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "推广UV花费",
                                "path": "/page/operationCenter/spendExtension",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "推送京东商品列表",
                                "path": "/page/operationCenter/jingDong/jingDongList",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "推广花费汇总",
                                "path": "/page/operationCenter/spendSummary",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "品牌经理维护",
                                "path": "/page/operationCenter/purchasingBrand",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "优惠券",
                                "path": "/page/operationCenter/coupon/couponManagement",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "app版本维护",
                                "path": "/page/operationCenter/app/appMaintenance",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "优惠券集市页维护",
                                "path": "/page/operationCenter/coupon/couponMarket",
                                "iconCls": ""
                            }
                        ],
                        "authName": "运营中心",
                        "path": "",
                        "iconCls": ""
                    },
                    {
                        "child": [
                            {
                                "child": [
                                    {
                                        "child": [],
                                        "authName": "产品活动维护",
                                        "path": "/page/activitycenter/activityProductList",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "清仓活动",
                                        "path": "/page/activitycenter/clearance/activityClearance",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "添加活动",
                                        "path": "/page/activitycenter/activityProductADD",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "添加广告",
                                        "path": "/page/activitycenter/activityAdvertisement",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "广告列表",
                                        "path": "/page/activitycenter/activityAdvertisementList",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "新增特卖预告",
                                        "path": "/page/activitycenter/activityAddSale",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "特卖预告",
                                        "path": "/page/activitycenter/activitySaleList",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "团购活动列表",
                                        "path": "/page/group/groupList",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "线下推广渠道统计",
                                        "path": "/page/chartReport/promotionChannelStatistics",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "新建团购活动",
                                        "path": "/page/group/NewGroup",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "团购活动提醒",
                                        "path": "/page/group/groupActivity",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "团购活动统计",
                                        "path": "/page/group/groupStatistics",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "线上推广渠道管理",
                                        "path": "/page/activitycenter/channelAdministration",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "组合营销",
                                        "path": "/page/activitycenter/combinedMarketing",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "线上推广统计",
                                        "path": "/page/chartReport/lineUp",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "签到管理",
                                        "path": "/page/activitycenter/attendanceManagement",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "套餐活动明细",
                                        "path": "/page/activitycenter/packageDetails",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "组合营销统计",
                                        "path": "/page/activitycenter/combinedStatistics",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "O2O品牌推广统计",
                                        "path": "/page/activitycenter/o2oBrandExtension",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "西门子PLC培训推广",
                                        "path": "/page/activitycenter/siemensPLC",
                                        "iconCls": ""
                                    }
                                ],
                                "authName": ".Net",
                                "path": "",
                                "iconCls": ""
                            },
                            {
                                "child": [
                                    {
                                        "child": [],
                                        "authName": "添加商城活动",
                                        "path": "/page/activitycenter/storeActivityProductADD",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "商城产品活动维护",
                                        "path": "/page/activitycenter/storeActivityProductList",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "添加商城广告",
                                        "path": "/page/activitycenter/storeActivityAdvertisement",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "商城广告列表",
                                        "path": "/page/activitycenter/storeActivityAdvertisementList",
                                        "iconCls": ""
                                    }
                                ],
                                "authName": ".Com",
                                "path": "",
                                "iconCls": ""
                            }
                        ],
                        "authName": "活动中心",
                        "path": "",
                        "iconCls": ""
                    },
                    {
                        "child": [
                            {
                                "child": [],
                                "authName": "现金券充值",
                                "path": "/page/recharge/rechargeCashcoupon",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "兑换记录",
                                "path": "/page/recharge/rechargeExchange",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "折扣比例",
                                "path": "/page/recharge/rechargeDiscount",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "积分商品维护",
                                "path": "/page/recharge/rechargeGift",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "礼品订单记录",
                                "path": "/page/recharge/giftOrderRecord",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "礼品维护",
                                "path": "/page/recharge/giftMaintenance",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "工豆分配",
                                "path": "/page/recharge/beanDistribution",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "工豆充值",
                                "path": "/page/recharge/beanRecharge",
                                "iconCls": ""
                            }
                        ],
                        "authName": "积分/现金券",
                        "path": "",
                        "iconCls": ""
                    },
                    {
                        "child": [
                            {
                                "child": [],
                                "authName": ".Net",
                                "path": "",
                                "iconCls": ""
                            },
                            {
                                "child": [
                                    {
                                        "child": [],
                                        "authName": "店铺管理",
                                        "path": "/page/shopManagement/ShopList",
                                        "iconCls": ""
                                    }
                                ],
                                "authName": ".Com",
                                "path": "",
                                "iconCls": ""
                            }
                        ],
                        "authName": "店铺维护",
                        "path": "",
                        "iconCls": ""
                    },
                    {
                        "child": [
                            {
                                "child": [],
                                "authName": "新增公告",
                                "path": "/page/message/addNotice",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "公告列表",
                                "path": "/page/message/NoticeList",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "意见箱",
                                "path": "/page/suggestions/complaintBox",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "关键词搜索日志",
                                "path": "/page/chartReport/keywordCount",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "订单评价",
                                "path": "/page/message/evaluationOrder",
                                "iconCls": ""
                            }
                        ],
                        "authName": "消息中心/意见箱",
                        "path": "",
                        "iconCls": ""
                    },
                    {
                        "child": [
                            {
                                "child": [
                                    {
                                        "child": [],
                                        "authName": "推荐品牌管理",
                                        "path": "/page/shoppingAdministration/brandAdmin?channel=1&",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "楼层管理（特卖）",
                                        "path": "/page/shoppingAdministration/ActivityFloorList",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "精选品牌",
                                        "path": "/page/shoppingAdministration/brandSelected?channel=1&",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "楼层管理（首页）",
                                        "path": "/page/shoppingAdministration/floorAdminIndex?channel=1&",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "分类推荐",
                                        "path": "/page/shoppingAdministration/classRecommend?channel=1&",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "新品推荐（广告）",
                                        "path": "/page/shoppingAdministration/newAdvertisement?channel=1&",
                                        "iconCls": ""
                                    }
                                ],
                                "authName": ".Net",
                                "path": "",
                                "iconCls": ""
                            },
                            {
                                "child": [
                                    {
                                        "child": [],
                                        "authName": "热门搜索管理",
                                        "path": "/page/shoppingAdministration/shopIndexhotsearch",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "广告管理",
                                        "path": "/page/shoppingAdministration/shopadvert",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "品牌推荐管理",
                                        "path": "/page/shoppingAdministration/brandAdmin?channel=2&",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "精选品牌",
                                        "path": "/page/shoppingAdministration/brandSelected?channel=2&",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "楼层管理",
                                        "path": "/page/shoppingAdministration/floorAdminIndex?channel=2&",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "分类推荐",
                                        "path": "/page/shoppingAdministration/classRecommend?channel=2&",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "网站公告",
                                        "path": "/page/shoppingAdministration/webNotice",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "每日推荐管理",
                                        "path": "/page/shoppingAdministration/dayrecom",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "新品推荐（广告）",
                                        "path": "/page/shoppingAdministration/newAdvertisement?channel=2&",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "楼层产品管理",
                                        "path": "/page/shoppingAdministration/floorProducts",
                                        "iconCls": ""
                                    },
                                    {
                                        "child": [],
                                        "authName": "楼层广告管理",
                                        "path": "/page/shoppingAdministration/floorAdver",
                                        "iconCls": ""
                                    }
                                ],
                                "authName": ".Com",
                                "path": "",
                                "iconCls": ""
                            }
                        ],
                        "authName": "首页维护",
                        "path": "",
                        "iconCls": ""
                    },
                    {
                        "child": [
                            {
                                "child": [],
                                "authName": "待售后确认(退款单)",
                                "path": "/page/order/customerReturn",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "退款单列表",
                                "path": "/page/order/returnOrder",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "待财务审核（退款单）",
                                "path": "/page/finance/examineFinance",
                                "iconCls": ""
                            }
                        ],
                        "authName": "退货退款",
                        "path": "",
                        "iconCls": ""
                    },
                    {
                        "child": [
                            {
                                "child": [],
                                "authName": "帐号",
                                "path": "/page/system/managerAccount",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "角色",
                                "path": "/page/system/managerRole",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "员工",
                                "path": "/page/system/managerStaff",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "权限",
                                "path": "/page/system/managerMenu",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "飞利浦数据上传",
                                "path": "/page/system/philipsUpload",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "部门",
                                "path": "/page/system/managerDept",
                                "iconCls": ""
                            }
                        ],
                        "authName": "系统中心",
                        "path": "",
                        "iconCls": ""
                    },
                    {
                        "child": [
                            {
                                "child": [],
                                "authName": "线下体验店二维码管理",
                                "path": "/page/microMall/codeQR",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "推广明细",
                                "path": "/page/microMall/extensionDetailed",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "返现明细",
                                "path": "/page/microMall/returnDetail",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "提现管理",
                                "path": "/page/microMall/cashManagement",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "返现设置",
                                "path": "/page/microMall/returnSetting",
                                "iconCls": ""
                            }
                        ],
                        "authName": "O2O微商模块",
                        "path": "",
                        "iconCls": ""
                    },
                    {
                        "child": [
                            {
                                "child": [],
                                "authName": "客户列表",
                                "path": "/page/mallCustomer/customerList",
                                "iconCls": ""
                            }
                        ],
                        "authName": "商城客户管理",
                        "path": "",
                        "iconCls": ""
                    },
                    {
                        "child": [
                            {
                                "child": [],
                                "authName": "套餐管理",
                                "path": "/page/ladderPrice/packageManage",
                                "iconCls": ""
                            },
                            {
                                "child": [],
                                "authName": "套餐商品",
                                "path": "/page/ladderPrice/shopPackage",
                                "iconCls": ""
                            }
                        ],
                        "authName": "大客户套餐管理",
                        "path": "",
                        "iconCls": ""
                    }
                ],
//                screenHeight: document.documentElement.clientHeight - 78,
                screenHeight: 680,
                authName:this.$route.query.authName,
                routePath:this.$route.path,
            }
        },
        created(){
            let _this = this;
            this.$store.dispatch('initMenuData').then(()=>{
                console.log('dispatch data', this.$store.state.menuData.length)
            });
//            this.BossApi.getMenuTreeData().then((response)=>{
//                this.menuData = response.data;
//            });
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            linkTo(path, authName){
                console.log(path, authName)
                this.authName = authName;
                if(path === 'index'){
                    this.$router.push({path: '/page/index',query:{authName: authName}});
                }else{
                    this.$router.push({path: path, query:{authName: authName}});
                }
                this.$store.commit('increment');

            }
        }
    }
</script>