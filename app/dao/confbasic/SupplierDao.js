
var SupplierModel = require('../../models/confbasic/SupplierModel');

  

var SupplierDao = {};

//根据ASN单据号查询明细
SupplierDao.find_detail_by_id = function (condition,selection){

    return SupplierModel.findOne(condition,selection).exec();
}

SupplierDao.find_list =function (condition,selection,limit,offset,sort,order){

console.log('in dao');
  var _sort = {};
  if (!sort) {
    sort = '_id'
  };
  _sort[sort] = -1;
  if (order === 'acs') {
    _sort[sort] = 1
  };

  return SupplierModel
        .find(condition,selection)
        .sort(_sort)
        .exec();
}

SupplierDao.add=function(asn_info){
  return SupplierModel(JSON.parse(asn_info)).save();
}

SupplierDao.getcount=function(condition){
    return SupplierModel
            .count()
            .exec();
}

module.exports=SupplierDao;
