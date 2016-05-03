
var UserDao =require('../dao/UserDao');

var UserService = {};

UserService.get_one_by_id=function(u_id){
	return UserDao.find_one_by_id(u_id);
}
 
UserService.get_all = function(){
	console.log('service'+UserDao.find_all());
	return UserDao.find_all();
}

module.exports = UserService;



