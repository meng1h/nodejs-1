//补货

var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
  res.render('jobinside/inventory');
});

module.exports= router;