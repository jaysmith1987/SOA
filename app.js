var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local'),Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var index = require('./routes/index');

var app = express();

mongoose.connect('mongodb://localhost:27017/soadb')
var db = mongoose.connection;

app.use(favicon(path.join(__dirname, '/client/public', 'favicon.ico')))
app.use(express.static(__dirname + '/client/public'));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:'soaparadyme',
  saveUninitialized: false,
  resave: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(expressValidator({
  errorFormatter: function(param, msg, value){
    var namespace = param.split('.'),
    root = namespace.shift(),
    formParam = root;

    while(namespace.length){
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg, 
      value: value
    };
  }
}));

app.use(flash());

app.use(function(req,res,next){
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
})

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(req, res, next) {
 var error = app.get('env') === 'development'? err : {};
 var status = err.status || 500;

 res.status.json({
   error: {
     message: error.message
   }
 });

 
});

app.get('*', function(req,res){
  res.sendfile('./client/public/index.html')
});

var port = app.get('port') || 3005;

app.listen(port, function(){
  console.log(`Server is listening on port ${port}`)
});

module.exports = app;
