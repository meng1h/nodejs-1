var AsnService=require('../../service/stockin/AsnService');

exports.api = {
  find_detail_by_id : function(req,res,next){
    var asn_id= req.params.asn_id;
    if (asn_id)
    {
     AsnService.find_detail_by_id(asn_id).then(function(asndetail){
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
    AsnService.find_list(asn_statu,pagesize*1,(pageno-1)*pagesize,"asn_id","asc")
    .then(function(asnlist){
      AsnService.getcount().then(function(total){
        return res.json({rows:asnlist,total:total});
      });
    });
  },

  add:function(req,res,next){
    //console.log(req.body)

      AsnService.add(req.body.tmp)
      .then(function(){
        return res.json({code:"success"});
      }).catch(function(err){
        return res.json({code:"err",data:err});
      });
  }


}