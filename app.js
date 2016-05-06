var express       = require('express');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var session       = require('express-session');
var Strategy      = require('passport-local').Strategy;
var passport      = require('passport');
var db            = require('./config/db');
var app           = express();
var instructorsList  = require('./routes/instructor');

//this is the nodemailer require
var nodemailer = require("nodemailer");
var nodemailerserver =require('./server.js');

var calendarRoute   = require('./routes/calendar');

var flash         = require('connect-flash');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false})); // session secret
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

var userRoutes = require('./routes/user');
app.use('/users', userRoutes);

app.get('/', function(req, res, next) {
  res.render('index', { title: 'Project 3' });
});


app.use('/users/calendar', function(req, res, next) {
  res.render('calendar', { title: 'Project 3' });
});

app.use('/profile', function(req, res, next) {
  res.render('profile', { title: 'Project 3'});
});


app.use('/login2', function(req, res, next) {
  res.render('login2');
});



app.use('/users/restricted', function(req, res, next) {
  res.render('restricted', { title: 'Project 3' });
});
// app.use('/', routes);
// app.use('/instructors', instructors);
// app.use('/producers', producers);
// app.use('/producerslogin', producerslogin);
// app.get('/producerslogin',
  // function(req, res){
    // res.render('login');
  // });
//
// app.listen(port, function(){
//   console.log("Listening on port " + port);
// });

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


module.exports = app;
