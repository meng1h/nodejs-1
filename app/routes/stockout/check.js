//包装复核

var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
  res.render('stockout/check');
});

module.exports= router;