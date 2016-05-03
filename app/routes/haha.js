var express = require('express');
var router = express.Router();
var middle_check_login=require('../middle/middle_check_login');

//中间件 -过滤写法 最后一个是
router.get('/', middle_check_login);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('haha');
});

module.exports = router;
