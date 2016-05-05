
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
   return UserModel(user_info).save();
}

// 获取用户列表，分页显示
UserDao.find_all =function (pagesize,pageno){
  //return UserModel.findAsync();

  // console.log('abc'+limit);
  // console.log("pagesize"+pagesize+"pageno"+pageno+"limit"+limit+"chuli"+(pageno-1)*pagesize)
  return UserModel
        .find()
        .skip((pageno-1)*pagesize)
        .limit(pagesize*1) //此处传入的一定是数字
        .exec();
}

UserDao.count_all=function(condition){
    return UserModel
            .count()
            .exec();
}

module.exports=UserDao;
