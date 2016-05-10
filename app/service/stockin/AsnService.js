
var AsnDao =require('../../dao/stockin/AsnDao');

var AsnService = {};

//return promise
AsnService.find_detail_by_id=function(asn_id){

  var condition,selection;
  condition={asn_id:asn_id};
  selection ={asn_detail:1};
  return AsnDao.find_detail_by_id(condition,selection);
}
 
 //获取asn单据列表 promise
AsnService.find_list = function(asn_statu,limit,offset,sort,order){
  //dao 入参 传入condition,selection,limit,offset,sort,order
  var condition,selection;

  condition = {
    asn_statu:asn_statu
  };

  selection = {
    asn_id:1,//单据号
    supplier:1,//供应商
    asn_statu:1,//单据状态
    asn_create_date:1//单据创建时间
  };

  return AsnDao.find_list(condition,selection,limit,offset,sort,order);
}

/**
 * 创建asn单
 * @Author   https://github.com/meng1h
 * @DateTime 2016-04-14T10:01:34+0800
 * @param    {Object}                  asn_info ans单信息
 * @return   {Promise}
 */
AsnService.add = function(asn_info){
  return AsnDao.add(asn_info);
}

AsnService.getcount = function()
{
  return AsnDao.getcount();
}



module.exports = AsnService;



