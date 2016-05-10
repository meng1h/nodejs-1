
var SupplierDao =require('../../dao/confbasic/SupplierDao');

var SupplierService = {};

//return promise
//mcode 是助记码
SupplierService.find_list=function(mcode){
  //console.log('in service');
  var condition,selection;

  console.log('mcode'+mcode);

    if (''!=mcode) {
      //模糊查询
        condition={

          //{ <field>: { $regex: /pattern/, $options: '<options>' } }
          mcode:{$regex:mcode,$options:'i'}
        };
    }else
    {
      condition = {};
    }

  selection ={supplier_id:1
              ,supplier_name:1
              ,supplier_contact:1
              ,supplier_email:1
              ,mcode:1};
  return SupplierDao.find_list(condition,selection);
}

SupplierService.add = function(supplier_info){
  return SupplierDao.add(supplier_info);
}

SupplierService.getcount = function()
{
  return SupplierDao.getcount();
}



module.exports = SupplierService;



