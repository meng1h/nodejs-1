var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose =require('mongoose');

var index = require('./app/routes/index');
var users = require('./app/routes/users');
var haha = require('./app/routes/haha');


/**数据库连接*/
mongoose.connect('mongodb://127.0.0.1/mytest-mongoose');

var app = express();

//中间件
//app.use(bodyParser);

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
//app.set('view engine', 'jade');

app.set('view engine', 'jade');

//静态文件目录
app.use(express.static(path.join(__dirname,'public')));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + 'public/javascripts'));

//路由
app.use('/', index);
app.use('/users', users);
app.use('/haha',haha);
''
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

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
  console.log("start server");
});
module.exports = app;
