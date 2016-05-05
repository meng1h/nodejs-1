var express = require('express');
var router = express.Router();

var UserControler = require('../controler/UserControler');

var middle_check_login =require('../middle/middle_check_login');
/* GET home page. */
router.get('/', middle_check_login,function(req, res, next) {

  res.render('index');

  /**

  });

  res.send( User.findOne({
    password:'123'
  },function(err,doc){
    if(err) return next(err);
    if(!doc) return res.send('<p>User not found.Go back and try again');
    req.session.loggedin=doc._id.toString();
    res.redirect('/');
  }));
  */
});

router.post('/',middle_check_login,function(req,res,next){

    /**
    new User({first:'ldl',last:'',email:'',password:'123'}).save(function(err){
      if(err) return next(err);
    });
    */
});

//find all
router.post('/index', middle_check_login,UserControler.api.get_all,function(req,res,next) {

});

//new user
router.post('/add', middle_check_login,UserControler.api.user_add,function(req,res,next) {

});

router.post('/index/del',middle_check_login,function(req,res,next){
  console.log(req.body);
  User.findOne({
      email:req.body.email
    },function(err,doc){
      if (doc) 
      {
        doc.remove();
        User.find(function(err,doc){
          if(err) return next(err);
          if(!doc) return res.send('<p>User not found.Go back and try again');

          res.send(doc);
          //req.session.loggedin=doc._id.toString();
          //res.redirect('/');
        });
      }
  });



})



module.exports = router;
