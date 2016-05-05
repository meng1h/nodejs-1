var express = require('express');
var router = express.Router();

console.log('init userconfig' +__dirname);

var UserControler = require('../../controler/UserControler');

router.get('/', function(req, res, next) {
  console.log('in config user');
  res.render('sys/userconfig');
});


//新增
// router.post('/index',UserControler.api.get_all,function(req,res,next) {

// });

//新增
router.post('/',UserControler.api.get_all,function(req,res,next) {

});


module.exports = router;
  
