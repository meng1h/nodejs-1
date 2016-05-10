//供应商维护
var express = require('express');
var router = express.Router();

var SupplierControler = require('../../controler/confbasic/SupplierControler');

router.get('/',function(req,res,next){
  res.render('confbasic/supplier');
});

router.post('/list',SupplierControler.api.get_list)

module.exports= router;