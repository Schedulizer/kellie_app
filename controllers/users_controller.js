var userController = {};
var User = require('../models/user');
var passport = require('passport');
require('../config/passport')(passport)

userController.index = function(req, res) {
   User.find({}, function(err, users) {
    if (err) {
      throw err;
    }
    res.json(users);
  });
};

// make new Instructor and new Producer
userController.new = function(req, res) {
  // different views for instructors and producers
  res.render('instructorSignup');
};

// make create Instructor and create Producer
userController.create = function(req, res) {
  var signUpStrategy = passport.authenticate('local-signup', {
    successRedirect: '/users/calendar',
    failureRedirect: '/users/restricted',
    failureFlash: true
  });

  return signUpStrategy(req, res);
};

userController.getLogin = function(request, response) {
  response.render('login.ejs', { message: request.flash('loginMessage') });
};

userController.getLogin2 = function(request, response) {
  response.render('login2.ejs', { message: request.flash('loginMessage') });
};

userController.postLogin = function(request, response) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/users/calendar',
    failureRedirect : '/users/signup',
    failureFlash : true
  });
  console.log('loginProperty');
  return loginProperty(request, response);
};

userController.getLogout = function(request, response) {
  request.logout();
  response.redirect('/');
};
userController.update = function(req, res) {};

userController.show = function(req, res) {};

userController.edit = function(req, res) {};

userController.destroy = function(req, res) {};

module.exports = userController;

