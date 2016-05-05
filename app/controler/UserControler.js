
var UserService=require('../service/UserService');



exports.api = {
  get_one_by_id : function(req,res,next){

  },
  get_all : function(req,res,next){
    var pagesize = req.query.pagesize;
    var pageno = req.query.pageno;

    UserService.count_all().then(function(count){
      UserService.get_all(pagesize
        ,pageno
        ,pagesize
      ).then(function (rows) {
        console.log(rows);
        console.log(count);
        res.json({
          rows: rows,
          total: count
        })
      });
    });
  },
  user_add:function(req,res,next){
    console.log(req.body);
    UserService.add_user(req.body).then(function(){
      //res.status=200;
      res.json({data:"NB"});
    }).catch(function(err){
      console.log(err);
      res.json={data:err}
    });
  }
}