
var mongoose =require('mongoose');
var Promise = require('bluebird');


/**建立模型*/
var Schema = mongoose.Schema;

var UserModel = mongoose.model("User",new Schema({
  first:String
  ,last:String
  ,email:{type:String,unique:true}
  ,password:{type:String}
}));

Promise.promisifyAll(UserModel);
Promise.promisifyAll(UserModel.prototype);

module.exports = UserModel;
