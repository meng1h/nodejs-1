//货物基础信息

var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
  res.render('confbasic/product');
});

module.exports= router;