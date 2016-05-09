//拆零拣选

var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
  res.render('stockout/pickbypiece');
});

module.exports= router;