var express = require('express');
var router = express.Router();

console.log('init storage in');

var UserControler = require('../controler/UserControler');

var middle_check_login =require('../middle/middle_check_login');
/* GET home page. */
router.get('/', middle_check_login,function(req, res, next) {
  res.render('storagein/index');
});

router.post('/',middle_check_login,function(req,res,next){});

//find all
router.post('/index', middle_check_login,UserControler.api.get_all,function(req,res,next) {});

//new user
router.post('/add', middle_check_login,UserControler.api.user_add,function(req,res,next) {});

router.post('/index/del',middle_check_login,function(req,res,next){})

module.exports = router;
