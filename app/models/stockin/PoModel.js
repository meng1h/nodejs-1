var mongoose =require('mongoose');
var Promise = require('bluebird');


/**建立模型*/
var Schema = mongoose.Schema;

var PoModel = mongoose.model("stock_in_po",new Schema({
  po_id:{type:String,unique:true},//PO单号
  supplier:String,//供应商
  po_create_date:Date,//制单时间
  po_operater:String,//制单员
  expect_deliver_date:Date,//预期送货日期
  po_detail:{
    pro_code:String//物料编码
    ,pro_name:String //物料名
    ,pro_spec:String //规格
    ,pro_origin:String //产地
    ,pro_pack_size:String //包装大小
    ,pro_birth_date:Date //生产日期
    ,pro_dead_date:Date //效期
    ,qty:Number //数量
  }
}));

Promise.promisifyAll(PoModel);
Promise.promisifyAll(PoModel.prototype);

module.exports = PoModel;
