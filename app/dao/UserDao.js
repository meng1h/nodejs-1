
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

// 获取用户列表，分页显示
UserDao.find_all =function (pagesize,pageno,limit){
	//return UserModel.findAsync();

	//console.log('abc'+limit);
	return UserModel
				.find()
				//.skip((pageno-1)*limit)
				.limit(limit)
				.exec();
}

module.exports=UserDao;
