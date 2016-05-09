//receipt 上架界面

var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
  res.render('stockin/upperstorage');
});

module.exports= router;