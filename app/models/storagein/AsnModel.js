var mongoose =require('mongoose');
var Promise = require('bluebird');


/**建立模型*/
var Schema = mongoose.Schema;

var AsnModel = mongoose.model("AsnMain",new Schema({
  asn_id:{type:String,unique:true},//单据号
  supplier:String,//供应商
  asn_statu:String,//单据状态
  asn_create_date:Date,//单据创建时间
  asn_detail:{
    pro_name:String //品名
    ,pro_spec:String //规格
    ,pro_origin:String //产地
    ,pro_pack_size:String //包装大小
    ,pro_birth_date:Date //生产日期
    ,pro_dead_date:Date //效期
    ,qty:Number //数量
  }
}));

Promise.promisifyAll(AsnModel);
Promise.promisifyAll(AsnModel.prototype);

module.exports = AsnModel;
