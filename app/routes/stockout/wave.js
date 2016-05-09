//receipt 出库波次运算

var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
  res.render('stockout/wave');
});

module.exports= router;