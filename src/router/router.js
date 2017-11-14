/**
 * vipmro.com
 * Created by cmf00627 on 2017/11/6.
 * describe:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import BossApi from '../api'

Vue.use(BossApi);
Vue.use(VueRouter);

const home = r => require.ensure([], () => r(require('@/views/Home.vue')), 'home');
let dataRoutes = [
    {
        "authName": "首页",
        "path": "/page/index",
        "requirePath": "/page/index.vue"
    },
    {
        "authName": "boss问答",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "产品中心",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "询价单",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "销售中心",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "上架中心",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "财务中心",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "运营报表",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "运营中心",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "活动中心",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "积分/现金券",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "店铺维护",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "消息中心/意见箱",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "首页维护",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "退货退款",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "系统中心",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "O2O微商模块",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "商城客户管理",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "大客户套餐管理",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "基础数据",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "OEM编码管理",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "新增商品SKU导入",
        "path": "/page/commodity/CommodityAddSKU",
        "requirePath": "/page/commodity/CommodityAddSKU.vue"
    },
    {
        "authName": "修改商品SKU导入",
        "path": "/page/commodity/CommodityEditSKU",
        "requirePath": "/page/commodity/CommodityEditSKU.vue"
    },
    {
        "authName": "基础数据导出",
        "path": "/page/commodity/CommodityProductList-select?type=2&",
        "requirePath": "/page/commodity/CommodityProductList-select.vue?type=2&"
    },
    {
        "authName": "分类管理",
        "path": "/page/commodity/CommodityClassification",
        "requirePath": "/page/commodity/CommodityClassification.vue"
    },
    {
        "authName": "产品列表查询",
        "path": "/page/commodity/CommodityProductList-select",
        "requirePath": "/page/commodity/CommodityProductList-select.vue"
    },
    {
        "authName": "产品列表操作",
        "path": "/page/commodity/CommodityProductList",
        "requirePath": "/page/commodity/CommodityProductList.vue"
    },
    {
        "authName": "品牌管理",
        "path": "/page/commodity/CommodityBrand",
        "requirePath": "/page/commodity/CommodityBrand.vue"
    },
    {
        "authName": "分类属性导入",
        "path": "/page/commodity/CommodityClassAttribute",
        "requirePath": "/page/commodity/CommodityClassAttribute.vue"
    },
    {
        "authName": "分类属性查询",
        "path": "/page/commodity/CommodityClassAttribute?type=2&",
        "requirePath": "/page/commodity/CommodityClassAttribute.vue?type=2&"
    },
    {
        "authName": "品牌授权",
        "path": "/page/commodity/commodityGrant",
        "requirePath": "/page/commodity/commodityGrant.vue"
    },
    {
        "authName": "供应商仓库维护",
        "path": "/page/commodity/supplierUphold",
        "requirePath": "/page/commodity/supplierUphold.vue"
    },
    {
        "authName": "临时数据修改",
        "path": "/page/commodity/commodityTemList",
        "requirePath": "/page/commodity/commodityTemList.vue"
    },
    {
        "authName": "临时数据新增",
        "path": "/page/commodity/commodityTemNew",
        "requirePath": "/page/commodity/commodityTemNew.vue"
    },
    {
        "authName": "供应商ID同步",
        "path": "/page/commodity/supplierList",
        "requirePath": "/page/commodity/supplierList.vue"
    },
    {
        "authName": "品牌证书管理",
        "path": "/page/commodity/managementBrand",
        "requirePath": "/page/commodity/managementBrand.vue"
    },
    {
        "authName": "运费管理",
        "path": "/page/commodity/freightManagement",
        "requirePath": "/page/commodity/freightManagement.vue"
    },
    {
        "authName": "京东商品",
        "path": "/page/commodity/jingdong",
        "requirePath": "/page/commodity/jingdong.vue"
    },
    {
        "authName": "第二套分类",
        "path": "/page/commodity/brandClassification",
        "requirePath": "/page/commodity/brandClassification.vue"
    },
    {
        "authName": "轴承查看",
        "path": "/page/commodity/bearingView",
        "requirePath": "/page/commodity/bearingView.vue"
    },
    {
        "authName": "运费管理（物流）",
        "path": "/page/commodity/freightLogistics",
        "requirePath": "/page/commodity/freightLogistics.vue"
    },
    {
        "authName": "商品编码查询",
        "path": "/page/commodity/CommoditySelectCode",
        "requirePath": "/page/commodity/CommoditySelectCode.vue"
    },
    {
        "authName": "新建订单",
        "path": "/page/order/manualOrder",
        "requirePath": "/page/order/manualOrder.vue"
    },
    {
        "authName": "待客服审核（手工单）",
        "path": "/page/order/OrderCustomer",
        "requirePath": "/page/order/OrderCustomer.vue"
    },
    {
        "authName": "待主管审核（手工单）",
        "path": "/page/order/OrderExamine",
        "requirePath": "/page/order/OrderExamine.vue"
    },
    {
        "authName": "待付款订单",
        "path": "/page/order/orderPay",
        "requirePath": "/page/order/orderPay.vue"
    },
    {
        "authName": "待确认付款",
        "path": "/page/order/PaymentSure",
        "requirePath": "/page/order/PaymentSure.vue"
    },
    {
        "authName": "待发货订单",
        "path": "/page/order/orderShipped",
        "requirePath": "/page/order/orderShipped.vue"
    },
    {
        "authName": "订单列表",
        "path": "/page/order/selectOrder",
        "requirePath": "/page/order/selectOrder.vue"
    },
    {
        "authName": "原始订单列表",
        "path": "/page/order/originalOrder",
        "requirePath": "/page/order/originalOrder.vue"
    },
    {
        "authName": "库存查询",
        "path": "/page/order/orderSelected",
        "requirePath": "/page/order/orderSelected.vue"
    },
    {
        "authName": "新增商品",
        "path": "/page/order/orderAddGoods",
        "requirePath": "/page/order/orderAddGoods.vue"
    },
    {
        "authName": "付款单列表",
        "path": "/page/order/OrderPayment",
        "requirePath": "/page/order/OrderPayment.vue"
    },
    {
        "authName": "批量报价",
        "path": "/page/order/batchQuote",
        "requirePath": "/page/order/batchQuote.vue"
    },
    {
        "authName": "付款单待发起",
        "path": "/page/order/paymentOrderno",
        "requirePath": "/page/order/paymentOrderno.vue"
    },
    {
        "authName": "待主管审核付款单",
        "path": "/page/order/SupervisorOrderno",
        "requirePath": "/page/order/SupervisorOrderno.vue"
    },
    {
        "authName": "订单未结清",
        "path": "/page/order/financeNo",
        "requirePath": "/page/order/financeNo.vue"
    },
    {
        "authName": "未审核付款单列表",
        "path": "/page/order/paymentBill",
        "requirePath": "/page/order/paymentBill.vue"
    },
    {
        "authName": "余额转出发起",
        "path": "/page/order/balanceTransfer",
        "requirePath": "/page/order/balanceTransfer.vue"
    },
    {
        "authName": "余额转出列表",
        "path": "/page/order/balanceTransferList",
        "requirePath": "/page/order/balanceTransferList.vue"
    },
    {
        "authName": "余额转出审核",
        "path": "/page/order/balanceExamine",
        "requirePath": "/page/order/balanceExamine.vue"
    },
    {
        "authName": "线下银行查询",
        "path": "/page/order/bankOffline",
        "requirePath": "/page/order/bankOffline.vue"
    },
    {
        "authName": "财务确认",
        "path": "/page/finance/financeConfirm",
        "requirePath": "/page/finance/financeConfirm.vue"
    },
    {
        "authName": "财务订单统计",
        "path": "/page/chartReport/financialCount",
        "requirePath": "/page/chartReport/financialCount.vue"
    },
    {
        "authName": "地推销售明细",
        "path": "/page/chartReport/crmOrderDetail",
        "requirePath": "/page/chartReport/crmOrderDetail.vue"
    },
    {
        "authName": "当月订单发货时间报表",
        "path": "/page/finance/orderDeliveryTime",
        "requirePath": "/page/finance/orderDeliveryTime.vue"
    },
    {
        "authName": "财务当月确认到款",
        "path": "/page/finance/orderMoneyMouth",
        "requirePath": "/page/finance/orderMoneyMouth.vue"
    },
    {
        "authName": "1贷通支付订单",
        "path": "/page/finance/loanThrough",
        "requirePath": "/page/finance/loanThrough.vue"
    },
    {
        "authName": "1贷通打款确认",
        "path": "/page/finance/loanThroughSure",
        "requirePath": "/page/finance/loanThroughSure.vue"
    },
    {
        "authName": "增值税专用发票",
        "path": "/page/finance/invoiceVAT",
        "requirePath": "/page/finance/invoiceVAT.vue"
    },
    {
        "authName": "发票快递导入",
        "path": "/page/finance/importInvoice",
        "requirePath": "/page/finance/importInvoice.vue"
    },
    {
        "authName": "余额转出确认",
        "path": "/page/finance/balanceSure",
        "requirePath": "/page/finance/balanceSure.vue"
    },
    {
        "authName": "收款单",
        "path": "/page/finance/receiptList",
        "requirePath": "/page/finance/receiptList.vue"
    },
    {
        "authName": "已确认付款单",
        "path": "/page/finance/confirmationPayment",
        "requirePath": "/page/finance/confirmationPayment.vue"
    },
    {
        "authName": "虚拟卡号",
        "path": "/page/finance/virtualCardList",
        "requirePath": "/page/finance/virtualCardList.vue"
    },
    {
        "authName": "出库单列表",
        "path": "/page/finance/orderOutboundList",
        "requirePath": "/page/finance/orderOutboundList.vue"
    },
    {
        "authName": ".Net",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": ".Com",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "产品活动维护",
        "path": "/page/activitycenter/activityProductList",
        "requirePath": "/page/activitycenter/activityProductList.vue"
    },
    {
        "authName": "清仓活动",
        "path": "/page/activitycenter/clearance/activityClearance",
        "requirePath": "/page/activitycenter/clearance/activityClearance.vue"
    },
    {
        "authName": "添加活动",
        "path": "/page/activitycenter/activityProductADD",
        "requirePath": "/page/activitycenter/activityProductADD.vue"
    },
    {
        "authName": "添加广告",
        "path": "/page/activitycenter/activityAdvertisement",
        "requirePath": "/page/activitycenter/activityAdvertisement.vue"
    },
    {
        "authName": "广告列表",
        "path": "/page/activitycenter/activityAdvertisementList",
        "requirePath": "/page/activitycenter/activityAdvertisementList.vue"
    },
    {
        "authName": "新增特卖预告",
        "path": "/page/activitycenter/activityAddSale",
        "requirePath": "/page/activitycenter/activityAddSale.vue"
    },
    {
        "authName": "特卖预告",
        "path": "/page/activitycenter/activitySaleList",
        "requirePath": "/page/activitycenter/activitySaleList.vue"
    },
    {
        "authName": "团购活动列表",
        "path": "/page/group/groupList",
        "requirePath": "/page/group/groupList.vue"
    },
    {
        "authName": "线下推广渠道统计",
        "path": "/page/chartReport/promotionChannelStatistics",
        "requirePath": "/page/chartReport/promotionChannelStatistics.vue"
    },
    {
        "authName": "新建团购活动",
        "path": "/page/group/NewGroup",
        "requirePath": "/page/group/NewGroup.vue"
    },
    {
        "authName": "团购活动提醒",
        "path": "/page/group/groupActivity",
        "requirePath": "/page/group/groupActivity.vue"
    },
    {
        "authName": "团购活动统计",
        "path": "/page/group/groupStatistics",
        "requirePath": "/page/group/groupStatistics.vue"
    },
    {
        "authName": "线上推广渠道管理",
        "path": "/page/activitycenter/channelAdministration",
        "requirePath": "/page/activitycenter/channelAdministration.vue"
    },
    {
        "authName": "组合营销",
        "path": "/page/activitycenter/combinedMarketing",
        "requirePath": "/page/activitycenter/combinedMarketing.vue"
    },
    {
        "authName": "线上推广统计",
        "path": "/page/chartReport/lineUp",
        "requirePath": "/page/chartReport/lineUp.vue"
    },
    {
        "authName": "签到管理",
        "path": "/page/activitycenter/attendanceManagement",
        "requirePath": "/page/activitycenter/attendanceManagement.vue"
    },
    {
        "authName": "套餐活动明细",
        "path": "/page/activitycenter/packageDetails",
        "requirePath": "/page/activitycenter/packageDetails.vue"
    },
    {
        "authName": "组合营销统计",
        "path": "/page/activitycenter/combinedStatistics",
        "requirePath": "/page/activitycenter/combinedStatistics.vue"
    },
    {
        "authName": "O2O品牌推广统计",
        "path": "/page/activitycenter/o2oBrandExtension",
        "requirePath": "/page/activitycenter/o2oBrandExtension.vue"
    },
    {
        "authName": "西门子PLC培训推广",
        "path": "/page/activitycenter/siemensPLC",
        "requirePath": "/page/activitycenter/siemensPLC.vue"
    },
    {
        "authName": "添加商城活动",
        "path": "/page/activitycenter/storeActivityProductADD",
        "requirePath": "/page/activitycenter/storeActivityProductADD.vue"
    },
    {
        "authName": "商城产品活动维护",
        "path": "/page/activitycenter/storeActivityProductList",
        "requirePath": "/page/activitycenter/storeActivityProductList.vue"
    },
    {
        "authName": "添加商城广告",
        "path": "/page/activitycenter/storeActivityAdvertisement",
        "requirePath": "/page/activitycenter/storeActivityAdvertisement.vue"
    },
    {
        "authName": "商城广告列表",
        "path": "/page/activitycenter/storeActivityAdvertisementList",
        "requirePath": "/page/activitycenter/storeActivityAdvertisementList.vue"
    },
    {
        "authName": "客户下单统计",
        "path": "/page/chartReport/buyerOrderNum",
        "requirePath": "/page/chartReport/buyerOrderNum.vue"
    },
    {
        "authName": "品牌销售统计",
        "path": "/page/chartReport/brandOrderNum",
        "requirePath": "/page/chartReport/brandOrderNum.vue"
    },
    {
        "authName": "地推销售统计",
        "path": "/page/chartReport/manageOrderNum",
        "requirePath": "/page/chartReport/manageOrderNum.vue"
    },
    {
        "authName": "商品销售统计",
        "path": "/page/chartReport/goodsOrderNum",
        "requirePath": "/page/chartReport/goodsOrderNum.vue"
    },
    {
        "authName": "新增用户统计",
        "path": "/page/chartReport/newUserCount",
        "requirePath": "/page/chartReport/newUserCount.vue"
    },
    {
        "authName": "用户活跃数",
        "path": "/page/chartReport/huoyuedu",
        "requirePath": "/page/chartReport/huoyuedu.vue"
    },
    {
        "authName": "订单数统计",
        "path": "/page/chartReport/order",
        "requirePath": "/page/chartReport/order.vue"
    },
    {
        "authName": "下单用户转化率",
        "path": "/page/chartReport/zhuanhualv",
        "requirePath": "/page/chartReport/zhuanhualv.vue"
    },
    {
        "authName": "重复下单率",
        "path": "/page/chartReport/chongfuxiadanlv",
        "requirePath": "/page/chartReport/chongfuxiadanlv.vue"
    },
    {
        "authName": "销售营业额",
        "path": "/page/chartReport/yingyeE",
        "requirePath": "/page/chartReport/yingyeE.vue"
    },
    {
        "authName": "商品分类销售统计",
        "path": "/page/chartReport/goodsCategory",
        "requirePath": "/page/chartReport/goodsCategory.vue"
    },
    {
        "authName": "商品系列销售统计",
        "path": "/page/chartReport/goodsSeries",
        "requirePath": "/page/chartReport/goodsSeries.vue"
    },
    {
        "authName": "关键词搜索日志",
        "path": "/page/chartReport/keywordCount",
        "requirePath": "/page/chartReport/keywordCount.vue"
    },
    {
        "authName": "客单价统计",
        "path": "/page/chartReport/kedanjia",
        "requirePath": "/page/chartReport/kedanjia.vue"
    },
    {
        "authName": "首单",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "热卖SKU",
        "path": "/page/chartReport/hotSKU",
        "requirePath": "/page/chartReport/hotSKU.vue"
    },
    {
        "authName": "线上推广统计",
        "path": "/page/chartReport/lineUp",
        "requirePath": "/page/chartReport/lineUp.vue"
    },
    {
        "authName": "现金券充值",
        "path": "/page/recharge/rechargeCashcoupon",
        "requirePath": "/page/recharge/rechargeCashcoupon.vue"
    },
    {
        "authName": "兑换记录",
        "path": "/page/recharge/rechargeExchange",
        "requirePath": "/page/recharge/rechargeExchange.vue"
    },
    {
        "authName": "折扣比例",
        "path": "/page/recharge/rechargeDiscount",
        "requirePath": "/page/recharge/rechargeDiscount.vue"
    },
    {
        "authName": "积分商品维护",
        "path": "/page/recharge/rechargeGift",
        "requirePath": "/page/recharge/rechargeGift.vue"
    },
    {
        "authName": "礼品订单记录",
        "path": "/page/recharge/giftOrderRecord",
        "requirePath": "/page/recharge/giftOrderRecord.vue"
    },
    {
        "authName": "礼品维护",
        "path": "/page/recharge/giftMaintenance",
        "requirePath": "/page/recharge/giftMaintenance.vue"
    },
    {
        "authName": "工豆分配",
        "path": "/page/recharge/beanDistribution",
        "requirePath": "/page/recharge/beanDistribution.vue"
    },
    {
        "authName": "工豆充值",
        "path": "/page/recharge/beanRecharge",
        "requirePath": "/page/recharge/beanRecharge.vue"
    },
    {
        "authName": ".Net",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": ".Com",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "店铺管理",
        "path": "/page/shopManagement/ShopList",
        "requirePath": "/page/shopManagement/ShopList.vue"
    },
    {
        "authName": "待售后确认(退款单)",
        "path": "/page/order/customerReturn",
        "requirePath": "/page/order/customerReturn.vue"
    },
    {
        "authName": "退款单列表",
        "path": "/page/order/returnOrder",
        "requirePath": "/page/order/returnOrder.vue"
    },
    {
        "authName": "待财务审核（退款单）",
        "path": "/page/finance/examineFinance",
        "requirePath": "/page/finance/examineFinance.vue"
    },
    {
        "authName": "新增公告",
        "path": "/page/message/addNotice",
        "requirePath": "/page/message/addNotice.vue"
    },
    {
        "authName": "公告列表",
        "path": "/page/message/NoticeList",
        "requirePath": "/page/message/NoticeList.vue"
    },
    {
        "authName": "意见箱",
        "path": "/page/suggestions/complaintBox",
        "requirePath": "/page/suggestions/complaintBox.vue"
    },
    {
        "authName": "关键词搜索日志",
        "path": "/page/chartReport/keywordCount",
        "requirePath": "/page/chartReport/keywordCount.vue"
    },
    {
        "authName": "订单评价",
        "path": "/page/message/evaluationOrder",
        "requirePath": "/page/message/evaluationOrder.vue"
    },
    {
        "authName": ".Net",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": ".Com",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "推荐品牌管理",
        "path": "/page/shoppingAdministration/brandAdmin?channel=1&",
        "requirePath": "/page/shoppingAdministration/brandAdmin.vue?channel=1&"
    },
    {
        "authName": "楼层管理（特卖）",
        "path": "/page/shoppingAdministration/ActivityFloorList",
        "requirePath": "/page/shoppingAdministration/ActivityFloorList.vue"
    },
    {
        "authName": "精选品牌",
        "path": "/page/shoppingAdministration/brandSelected?channel=1&",
        "requirePath": "/page/shoppingAdministration/brandSelected.vue?channel=1&"
    },
    {
        "authName": "楼层管理（首页）",
        "path": "/page/shoppingAdministration/floorAdminIndex?channel=1&",
        "requirePath": "/page/shoppingAdministration/floorAdminIndex.vue?channel=1&"
    },
    {
        "authName": "分类推荐",
        "path": "/page/shoppingAdministration/classRecommend?channel=1&",
        "requirePath": "/page/shoppingAdministration/classRecommend.vue?channel=1&"
    },
    {
        "authName": "新品推荐（广告）",
        "path": "/page/shoppingAdministration/newAdvertisement?channel=1&",
        "requirePath": "/page/shoppingAdministration/newAdvertisement.vue?channel=1&"
    },
    {
        "authName": "热门搜索管理",
        "path": "/page/shoppingAdministration/shopIndexhotsearch",
        "requirePath": "/page/shoppingAdministration/shopIndexhotsearch.vue"
    },
    {
        "authName": "广告管理",
        "path": "/page/shoppingAdministration/shopadvert",
        "requirePath": "/page/shoppingAdministration/shopadvert.vue"
    },
    {
        "authName": "品牌推荐管理",
        "path": "/page/shoppingAdministration/brandAdmin?channel=2&",
        "requirePath": "/page/shoppingAdministration/brandAdmin.vue?channel=2&"
    },
    {
        "authName": "精选品牌",
        "path": "/page/shoppingAdministration/brandSelected?channel=2&",
        "requirePath": "/page/shoppingAdministration/brandSelected.vue?channel=2&"
    },
    {
        "authName": "楼层管理",
        "path": "/page/shoppingAdministration/floorAdminIndex?channel=2&",
        "requirePath": "/page/shoppingAdministration/floorAdminIndex.vue?channel=2&"
    },
    {
        "authName": "分类推荐",
        "path": "/page/shoppingAdministration/classRecommend?channel=2&",
        "requirePath": "/page/shoppingAdministration/classRecommend.vue?channel=2&"
    },
    {
        "authName": "网站公告",
        "path": "/page/shoppingAdministration/webNotice",
        "requirePath": "/page/shoppingAdministration/webNotice.vue"
    },
    {
        "authName": "每日推荐管理",
        "path": "/page/shoppingAdministration/dayrecom",
        "requirePath": "/page/shoppingAdministration/dayrecom.vue"
    },
    {
        "authName": "新品推荐（广告）",
        "path": "/page/shoppingAdministration/newAdvertisement?channel=2&",
        "requirePath": "/page/shoppingAdministration/newAdvertisement.vue?channel=2&"
    },
    {
        "authName": "楼层产品管理",
        "path": "/page/shoppingAdministration/floorProducts",
        "requirePath": "/page/shoppingAdministration/floorProducts.vue"
    },
    {
        "authName": "楼层广告管理",
        "path": "/page/shoppingAdministration/floorAdver",
        "requirePath": "/page/shoppingAdministration/floorAdver.vue"
    },
    {
        "authName": "客户列表",
        "path": "/page/mallCustomer/customerList",
        "requirePath": "/page/mallCustomer/customerList.vue"
    },
    {
        "authName": ".Net",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": ".Com",
        "path": "",
        "requirePath": ""
    },
    {
        "authName": "上架商品列表",
        "path": "/page/commodity/commodityList",
        "requirePath": "/page/commodity/commodityList.vue"
    },
    {
        "authName": "上架SKU商品修改",
        "path": "/page/commodity/CommodityMountingEditSKU",
        "requirePath": "/page/commodity/CommodityMountingEditSKU.vue"
    },
    {
        "authName": "商城上架中心",
        "path": "/page/commodity/SellerGoodsList",
        "requirePath": "/page/commodity/SellerGoodsList.vue"
    },
    {
        "authName": "商城上架商品修改",
        "path": "/page/commodity/ShoppingGoods",
        "requirePath": "/page/commodity/ShoppingGoods.vue"
    },
    {
        "authName": "帐号",
        "path": "/page/system/managerAccount",
        "requirePath": "/page/system/managerAccount.vue"
    },
    {
        "authName": "角色",
        "path": "/page/system/managerRole",
        "requirePath": "/page/system/managerRole.vue"
    },
    {
        "authName": "员工",
        "path": "/page/system/managerStaff",
        "requirePath": "/page/system/managerStaff.vue"
    },
    {
        "authName": "权限",
        "path": "/page/system/managerMenu",
        "requirePath": "/page/system/managerMenu.vue"
    },
    {
        "authName": "飞利浦数据上传",
        "path": "/page/system/philipsUpload",
        "requirePath": "/page/system/philipsUpload.vue"
    },
    {
        "authName": "部门",
        "path": "/page/system/managerDept",
        "requirePath": "/page/system/managerDept.vue"
    },
    {
        "authName": "线下体验店二维码管理",
        "path": "/page/microMall/codeQR",
        "requirePath": "/page/microMall/codeQR.vue"
    },
    {
        "authName": "推广明细",
        "path": "/page/microMall/extensionDetailed",
        "requirePath": "/page/microMall/extensionDetailed.vue"
    },
    {
        "authName": "返现明细",
        "path": "/page/microMall/returnDetail",
        "requirePath": "/page/microMall/returnDetail.vue"
    },
    {
        "authName": "提现管理",
        "path": "/page/microMall/cashManagement",
        "requirePath": "/page/microMall/cashManagement.vue"
    },
    {
        "authName": "返现设置",
        "path": "/page/microMall/returnSetting",
        "requirePath": "/page/microMall/returnSetting.vue"
    },
    {
        "authName": "问答首页",
        "path": "index",
        "requirePath": "index"
    },
    {
        "authName": "目录权限",
        "path": "index",
        "requirePath": "index"
    },
    {
        "authName": "套餐管理",
        "path": "/page/ladderPrice/packageManage",
        "requirePath": "/page/ladderPrice/packageManage.vue"
    },
    {
        "authName": "套餐商品",
        "path": "/page/ladderPrice/shopPackage",
        "requirePath": "/page/ladderPrice/shopPackage.vue"
    },
    {
        "authName": "OEM品牌维护",
        "path": "/page/commodity/OEMbrand",
        "requirePath": "/page/commodity/OEMbrand.vue"
    },
    {
        "authName": "分类维护",
        "path": "/page/commodity/OEMClassified",
        "requirePath": "/page/commodity/OEMClassified.vue"
    },
    {
        "authName": "订货号生成",
        "path": "/page/commodity/OEMOrderNumber",
        "requirePath": "/page/commodity/OEMOrderNumber.vue"
    },
    {
        "authName": "会员阶梯价",
        "path": "/page/finance/memberPrice",
        "requirePath": "/page/finance/memberPrice.vue"
    },
    {
        "authName": "早市",
        "path": "/page/activitycenter/morningList",
        "requirePath": "/page/activitycenter/morningList.vue"
    },
    {
        "authName": "热卖推荐",
        "path": "/page/operationCenter/hotRecommend",
        "requirePath": "/page/operationCenter/hotRecommend.vue"
    },
    {
        "authName": "直播",
        "path": "/page/operationCenter/live/livePlatform",
        "requirePath": "/page/operationCenter/live/livePlatform.vue"
    },
    {
        "authName": "广告列表统计",
        "path": "/page/operationCenter/AdList",
        "requirePath": "/page/operationCenter/AdList.vue"
    },
    {
        "authName": "热卖推荐统计",
        "path": "/page/operationCenter/recommendedStatistics",
        "requirePath": "/page/operationCenter/recommendedStatistics.vue"
    },
    {
        "authName": "工豆充值申请",
        "path": "/page/operationCenter/gongdou/rechargeApplication",
        "requirePath": "/page/operationCenter/gongdou/rechargeApplication.vue"
    },
    {
        "authName": "工豆充值确认",
        "path": "/page/operationCenter/gongdou/rechargeConfirmation",
        "requirePath": "/page/operationCenter/gongdou/rechargeConfirmation.vue"
    },
    {
        "authName": "早市统计",
        "path": "/page/operationCenter/statisticsMarket",
        "requirePath": "/page/operationCenter/statisticsMarket.vue"
    },
    {
        "authName": "推广UV花费",
        "path": "/page/operationCenter/spendExtension",
        "requirePath": "/page/operationCenter/spendExtension.vue"
    },
    {
        "authName": "推送京东商品列表",
        "path": "/page/operationCenter/jingDong/jingDongList",
        "requirePath": "/page/operationCenter/jingDong/jingDongList.vue"
    },
    {
        "authName": "推广花费汇总",
        "path": "/page/operationCenter/spendSummary",
        "requirePath": "/page/operationCenter/spendSummary.vue"
    },
    {
        "authName": "品牌经理维护",
        "path": "/page/operationCenter/purchasingBrand",
        "requirePath": "/page/operationCenter/purchasingBrand.vue"
    },
    {
        "authName": "优惠券",
        "path": "/page/operationCenter/coupon/couponManagement",
        "requirePath": "/page/operationCenter/coupon/couponManagement.vue"
    },
    {
        "authName": "app版本维护",
        "path": "/page/operationCenter/app/appMaintenance",
        "requirePath": "/page/operationCenter/app/appMaintenance.vue"
    },
    {
        "authName": "优惠券集市页维护",
        "path": "/page/operationCenter/coupon/couponMarket",
        "requirePath": "/page/operationCenter/coupon/couponMarket.vue"
    },
    {
        "authName": "询价单列表",
        "path": "/page/inquirySheet/inquirySheetList",
        "requirePath": "/page/inquirySheet/inquirySheetList.vue"
    },
    {
        "authName": "发起询价单",
        "path": "/page/inquirySheet/addinquirySheet",
        "requirePath": "/page/inquirySheet/addinquirySheet.vue"
    },
    {
        "authName": "待处理的询价单",
        "path": "/page/inquirySheet/pendingInquirySheet",
        "requirePath": "/page/inquirySheet/pendingInquirySheet.vue"
    },
    {
        "authName": "询价汇总",
        "path": "/page/inquirySheet/inquirySummary",
        "requirePath": "/page/inquirySheet/inquirySummary.vue"
    },
    {
        "authName": "询价量统计",
        "path": "/page/inquirySheet/quotationStatistics",
        "requirePath": "/page/inquirySheet/quotationStatistics.vue"
    },
    {
        "authName": "采购品牌关系",
        "path": "/page/inquirySheet/purchasingBrand",
        "requirePath": "/page/inquirySheet/purchasingBrand.vue"
    }
];
let children = [];
// for(let i=0; i < dataRoutes.length; i++){
//     let p = dataRoutes[i].path;
//     let rp = dataRoutes[i].requirePath;
//     if (p) {
//         children.push({
//             path: p,
//             component:  function (r) {
//                 require.ensure([], function () {
//                     return r(require('@/views'+rp))
//                 });
//             }
//         });
//     }
// }
let routes = [
    {
        name: "root", path: "/", component: home,
        children
    }
];
let router = new VueRouter({
    routes
});
BossApi.getMenuData()
    .then((response)=> {
        for (let i = 0; i < response.data.length; i++) {
            let p = response.data[i].path;
            let rp = response.data[i].requirePath;
            if (p) {
                children.push({
                    path: p,
                    component:  function (r) {
                        require.ensure([], function () {
                            return r(require('@/views'+rp))
                        });
                    }
                });
            }
        }
        let routes = [
            {
                name: "root", path: "/", component: home,
                children
            }
        ];
        router.addRoutes(routes)
    });
export default router;