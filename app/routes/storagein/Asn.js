var express = require('express');
var router = express.Router();

console.log('init storage in');

var AsnControler = require('../../controler/storagein/AsnControler');

//获取页面
router.get('/', function(req, res, next) {
  res.render('storagein/asn');
});

//添加
router.post('/add',AsnControler.api.add);

// //asn列表
router.post('/list',AsnControler.api.find_asn_list);

// //根据asnid获取详细信息
router.post('/:asn_id',AsnControler.api.find_detail_by_asnid);

module.exports = router;
