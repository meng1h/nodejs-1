
var mongoose =require('mongoose');


/**建立模型*/
var Schema = mongoose.Schema;

var UserModel = mongoose.model("User",new Schema({
  first:String
  ,last:String
  ,email:{type:String,unique:true}
  ,password:{type:String}
}));

module.exports = UserModel;
