var express = require('express');
var router = express.Router();

//console.log('init storage in');

var AsnControler = require('../../controler/stockin/AsnControler');

//获取页面
router.get('/', function(req, res, next) {
  res.render('stockin/asn');
});

//添加
router.post('/add',AsnControler.api.add);

// //asn列表
router.post('/list',AsnControler.api.find_list);

// //根据asnid获取详细信息
router.post('/:asn_id',AsnControler.api.find_detail_by_id);

module.exports = router;
