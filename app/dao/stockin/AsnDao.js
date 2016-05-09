
var AsnModel = require('../../models/stockin/AsnModel');

  

var AsnDao = {};

//根据ASN单据号查询明细
AsnDao.find_detail_by_id = function (condition,selection){

    return AsnModel.findOne(condition,selection).exec();
}

//获取asn单据列表
/**
 * 根据条件分页
 * @Author                            https://github.com/meng1h
 * @DateTime 2016-02-27T14:46:25+0800
 * @param    {[Object]}                 condition                      [查询条件]
 * @param    {[Object]}                 selection                      [查询字段]
 * @param    {[Number]}                 limit                          [分页数量]
 * @param    {[Number]}                 offset                         [偏移数量]
 * @param    {[String]}                 sort                           [排序字段]
 * @param    {[String]}                 order                          [排列顺序]
 * @return   {[Query]}                                                 [返回结果]
 */
AsnDao.find_list =function (condition,selection,limit,offset,sort,order){

  var _sort = {};
  if (!sort) {
    sort = '_id'
  };
  _sort[sort] = -1;
  if (order === 'acs') {
    _sort[sort] = 1
  };

  return AsnModel
        .find(condition,selection)
        .sort(_sort)
        .skip(offset)
        .limit(limit) //此处传入的一定是数字
        .exec();
}

AsnDao.add=function(asn_info){
  return AsnModel(JSON.parse(asn_info)).save();
}

AsnDao.getcount=function(condition){
    return AsnModel
            .count()
            .exec();
}

module.exports=AsnDao;
