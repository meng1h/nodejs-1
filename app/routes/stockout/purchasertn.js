//采购退货

var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
  res.render('stockout/purchasertn');
});

module.exports= router;