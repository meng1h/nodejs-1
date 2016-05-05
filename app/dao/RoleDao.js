
var RoleModel = require('../models/RoleModel');

var RoleDao = {};
RoleDao.find_one_by_id = function (u_id){

    RoleModel.findOne({
      email:u_id
    },function(err,doc){
    if (doc) {
      return doc;
    }else{

    }

  });
}

RoleDao.add_user = function(user_info){
    new RoleModel(user_info).save(function(err){
    if(err) return next(err);
  });
}

// 获取用户列表，分页显示
RoleDao.find_all =function (pagesize,pageno,limit){
  //return UserModel.findAsync();

  // console.log('abc'+limit);
  // console.log("pagesize"+pagesize+"pageno"+pageno+"limit"+limit+"chuli"+(pageno-1)*pagesize)
  return RoleModel
        .find()
        .skip((pageno-1)*pagesize)
        .limit(limit*1) //此处传入的一定是数字
        .exec();
}



module.exports=RoleDao;
