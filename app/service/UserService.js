
var UserDao =require('../dao/UserDao');

var UserService = {};

UserService.get_one_by_id=function(u_id){
	return UserDao.find_one_by_id(u_id);
}
 
UserService.get_all = function(pagesize,pageno){
	//console.log('service'+UserDao.find_all());
	//console.log('1'+limit);
	return UserDao.find_all(pagesize,pageno);
}

UserService.count_all=function(condition){
  return UserDao.count_all(condition);
}

UserService.add_user = function(user_info){
	return UserDao.add_user(user_info);
}

module.exports = UserService;



