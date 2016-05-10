var mongoose =require('mongoose');
var Promise = require('bluebird');


/**建立模型*/
var Schema = mongoose.Schema;

var SupplierModel = mongoose.model("conf_basic_supplier",new Schema({
  supplier_id:{type:String,unique:true},//供应商编号
  supplier_name:String,//供应商名称
  supplier_contact:String,//供应商电话
  supplier_email:String//供应商电子邮件
  ,mcode:String //助记码
}));

Promise.promisifyAll(SupplierModel);
Promise.promisifyAll(SupplierModel.prototype);

module.exports = SupplierModel;
