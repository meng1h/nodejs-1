
var PoDao =require('../../dao/stockin/PoDao');

var PoService = {};

//return promise
PoService.find_detail_by_id=function(po_id){

  var condition,selection;
  condition={po_id:po_id};
  selection ={po_detail:1};
  return PoDao.find_detail_by_id(condition,selection);
}
 
 //获取asn单据列表 promise
PoService.find_list = function(limit,offset,sort,order){
  //dao 入参 传入condition,selection,limit,offset,sort,order
  var condition,selection;

  // condition = {
  //   asn_statu:asn_statu
  // };
  condition = {};


  selection = {
    po_id:1,//PO单号
    supplier:1,//供应商
    po_create_date:1,//制单时间
    po_operater:1,//制单员
    expect_deliver_date:1//预期送货日期
  };

  return PoDao.find_list(condition,selection,limit,offset,sort,order);
}

/**
 * 创建Po单
 * @Author   https://github.com/meng1h
 * @DateTime 2016-04-14T10:01:34+0800
 * @param    {Object}                  po_info PO单信息
 * @return   {Promise}
 */
PoService.add = function(po_info){
  return PoDao.add(po_info);
}

PoService.getcount = function()
{
  return PoDao.getcount();
}

module.exports = PoService;



