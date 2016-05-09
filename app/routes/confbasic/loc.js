//货位配置

var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
  res.render('confbasic/loc');
});

module.exports= router;