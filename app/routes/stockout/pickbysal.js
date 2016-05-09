//托盘拣货

var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
  res.render('stockout/pickbysal');
});

module.exports= router;