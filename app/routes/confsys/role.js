//角色配置

var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
  res.render('confsys/role');
});

module.exports= router;