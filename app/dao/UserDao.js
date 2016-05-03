
var UserModel = require('../models/UserModel');

var UserDao = {};
UserDao.find_one_by_id = function (u_id){

		UserModel.findOne({
			email:u_id
		},function(err,doc){
		if (doc) {
			return doc;
		}else{

		}

	});
}

UserDao.add_user = function(user_info){
    new UserModel(user_info).save(function(err){
		if(err) return next(err);
	});
}

UserDao.find_all =function (){
		UserModel.find(function(err,doc){
			if(err) return next(err);
			
			console.log('dao'+doc);
			return doc;			
		});
}

module.exports=UserDao;


