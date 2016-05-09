var PoService=require('../../service/stockin/PoService');

exports.api = {
  find_detail_by_id : function(req,res,next){
    var po_id= req.params.po_id;
    if (po_id)
    {
     PoService.find_detail_by_id(po_id).then(function(asndetail){
        return res.json(asndetail);
      });
    };
  },
  find_list:function(req,res,next){
    var pagesize = req.query.pagesize;
    var pageno = req.query.pageno;
    var asn_statu = req.query.asn_statu;

    console.log(pagesize+""+pageno+""+asn_statu);
    //传入参数 asn_statu,limit,offset,sort,order
    PoService.find_list(asn_statu,pagesize*1,(pageno-1)*pagesize,"asn_id","asc")
    .then(function(asnlist){
      PoService.getcount().then(function(total){
        return res.json({rows:asnlist,total:total});
      });
    });
  },

  add:function(req,res,next){
    //console.log(req.body)

      PoService.add(req.body.tmp)
      .then(function(){
        return res.json({code:"success"});
      }).catch(function(err){
        return res.json({code:"err",data:err});
      });
  }


}