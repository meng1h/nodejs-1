
var UserService=require('../service/UserService');

exports.api = {
	get_one_by_id : function(req,res,next){

	},
	get_all : function(req,res,next){
		console.log('in service');
		console.log(UserService.get_all());
		return UserService.get_all();
	}
}