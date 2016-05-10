
var SupplierService=require('../../service/confbasic/SupplierService');



exports.api = {
  get_one_by_id : function(req,res,next){

  },
  get_list : function(req,res,next){
    // console.log('in control');
    console.log(req.query);
    SupplierService.find_list(req.query.mcode).then(function(supplier_list){
      res.json(supplier_list);
    });
  },
  user_add:function(req,res,next){
    console.log(req.body);
    SupplierService.add_user(req.body).then(function(){
      //res.status=200;
      res.json({data:"NB"});
    }).catch(function(err){
      console.log(err);
      res.json={data:err}
    });
  }
}