var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose =require('mongoose');
var colors=require('colors');

// var index = require('./app/routes/index');
// var users = require('./app/routes/users');
// var haha = require('./app/routes/haha');
// var sys_userconfig = require('./app/routes/sys/userconfig');

var moa_api_config = require('moa-api-config');

/**数据库连接*/
mongoose.connect('mongodb://127.0.0.1/mytest-mongoose');

var app = require('base2')({
  // debug: true,
  root:__dirname,
  "views": "app/views",
  "routes": "app/routes",
  "public": "public",
  pre: function (app) {
    // app.use(res_api);
    // app.use(function (req, res, next) {
    //   req.redis = redis;
    //   return next();
      // });
  }
})

//加载指定模块中的路由
moa_api_config(app, __dirname);

// var app = express();

//中间件
//app.use(bodyParser);

// // view engine setup
// app.set('views', path.join(__dirname, 'app/views'));
// //app.set('view engine', 'jade');

// app.set('view engine', 'jade');

// //静态文件目录
// app.use(express.static(path.join(__dirname,'public')));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(__dirname + 'public/javascripts'));

//路由
// app.use('/', index);
// app.use('/users', users);
// app.use('/sys/userconfig',sys_userconfig);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(3000,function(){
  console.log("start server".green);
  console.log('i like cake and pies'.underline.red) // outputs red underlined text
  console.log('inverse the color'.inverse); // inverses the color
  console.log('OMG Rainbows!'.rainbow); // rainbow (ignores spaces)
});
module.exports = app;
