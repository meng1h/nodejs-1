var db = require('../db');


//初始化20个供应商
var SupplierModel = require('../app/models/confbasic/SupplierModel');
SupplierModel.remove({},function(){
    for(var i=0;i<20;i++){
        var supplier_info={
            supplier_id:'supplier00'+i,//供应商编号
            supplier_name:'刘德龙'+i,//供应商名称
            supplier_contact:'13581935031',//供应商电话
            supplier_email:'meng_1h@126.com'//供应商电子邮件
            ,mcode:'ldl'+i
        };

        SupplierModel(supplier_info).save();
    }
});
//po单先删除，后初始化30条记录
var PoModel = require('../app/models/stockin/PoModel');
PoModel.remove({},function(){

  for(var i=0;i<30;i++){
    //初始化采购单
    var po_info = {
        po_id:'PO000'+i,//PO单号
        supplier:'ldl',//供应商
        po_create_date:new Date(),//制单时间
        po_operater:'ldl',//制单员
        expect_deliver_date:new Date(),//预期送货日期
        po_detail:
        [
          {
            pro_code:'code0'//物料编码
            ,pro_name:'枇杷露' //物料名
            ,pro_spec:'0.2g' //规格
            ,pro_origin:'石家庄' //产地
            ,pro_pack_size:'10' //包装大小
            ,pro_birth_date:new Date() //生产日期
            ,pro_dead_date:new Date() //效期
            ,qty:100 //数量
          },{
            pro_code:'code1'//物料编码
            ,pro_name:'枇杷露' //物料名
            ,pro_spec:'0.2g' //规格
            ,pro_origin:'石家庄' //产地
            ,pro_pack_size:'10' //包装大小
            ,pro_birth_date:new Date() //生产日期
            ,pro_dead_date:new Date() //效期
            ,qty:100 //数量
          }
        ]
    } 
    //console.log(po_info);
    PoModel(po_info).save();
  }
});

//asn单先删除，然后初始化30条记录
var AsnModel = require('../app/models/stockin/AsnModel');
AsnModel.remove({},function(){

  for(var i=0;i<30;i++){
    //初始化采购单
    var asn_info = {
        asn_id:'ASN000'+i,//PO单号
        supplier:'ldl',//供应商
        asn_statu:'A',//制单时间
        asn_create_date:new Date(),//制单员
        asn_detail:
        [
          {
            pro_name:'枇杷露1' //品名
            ,pro_spec:'0.2g' //规格
            ,pro_origin:'石家庄' //产地
            ,pro_pack_size:'100' //包装大小
            ,pro_birth_date:new Date() //生产日期
            ,pro_dead_date:new Date() //效期
            ,qty:100 //数量
          },{
            pro_name:'枇杷露2' //品名
            ,pro_spec:'0.2g' //规格
            ,pro_origin:'石家庄' //产地
            ,pro_pack_size:'100' //包装大小
            ,pro_birth_date:new Date() //生产日期
            ,pro_dead_date:new Date() //效期
            ,qty:100 //数量
          }
        ]
    } 
    //console.log(asn_info);
    AsnModel(asn_info).save();
  }
});




