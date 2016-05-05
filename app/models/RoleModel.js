var mongoose =require('mongoose');
var Promise = require('bluebird');


/**建立模型*/
var Schema = mongoose.Schema;

var RoleModel = mongoose.model("Role",new Schema({
  first:String
  ,last:String
  ,email:{type:String,unique:true}
  ,password:{type:String}
}));

Promise.promisifyAll(RoleModel);
Promise.promisifyAll(RoleModel.prototype);

module.exports = RoleModel;
