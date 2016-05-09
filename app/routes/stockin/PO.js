//receipt 采购订单

var express = require('express');
var router = express.Router();

var PoControler = require('../../controler/stockin/PoControler');

router.get('/',function(req,res,next){
  res.render('stockin/po');
});

router.post('/:po_id',PoControler.api.find_detail_by_id,function(req,res,next){});

module.exports= router;