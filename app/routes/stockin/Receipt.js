//receipt 收货确认界面

var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
  res.render('stockin/receipt');
});

module.exports= router;