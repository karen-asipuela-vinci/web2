var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { nextTick } = require('process');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//creation tableau

app.use((req, res, next) => {
    let methodIndex = `${req.path} ${req.method}` ; //permet de récupérer les variables html
});

app.use((req, res, next) => {
    console.log('GET/ : ', req.path);
    next();
  });

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
