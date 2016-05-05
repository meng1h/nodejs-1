
var UserService=require('../service/UserService');



exports.api = {
  get_one_by_id : function(req,res,next){

  },
  get_all : function(req,res,next){
    //console.log('in service');
    //console.log(UserService.get_all());

    //console.log('limit'+req.query.limit);

    //pagesize,pageno,limit,sort,condition
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
    


    // res.send(UserService.get_all());
    //return;
  }
}