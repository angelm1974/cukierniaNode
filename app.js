var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tortyRouter = require('./routes/torty');
var ciastaRouter = require('./routes/ciasta');
var ciastkaRouter = require('./routes/ciastka');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('x-powered-by', false);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/torty', tortyRouter);
app.use('/ciasta', ciastaRouter);
app.use('/ciastka', ciastkaRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

MONGODB_URL='mongodb+srv://podyplomowka:Goscie!001@cluster0.ajwo5.mongodb.net/bydgoszcz'

mongoose.connect(MONGODB_URL);

const ciastoSchema= new mongoose.Schema({
  nazwa: String,
  opis: String,
  typ: String,
  skladniki: {mąka: Number,
              cukier: Number,
              jajka: Number,
              olej: Number,}
});

// app.use('/users',function(req, res, next) {
//   console.log('%s %s -%s',(new Date()).toTimeString(),req.method,req.url);
//   return next();
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
 
});

module.exports = app;
