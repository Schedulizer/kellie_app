var userController = {};
var User = require('../models/user');
var passport = require('passport');

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
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true
  });

  return signUpStrategy(request, response);
};

userController.getLogin = function(request, response) {
  response.render('login.ejs', { message: request.flash('loginMessage') });
};

userController.postLogin = function(request, response) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/',
    failureRedirect : '/login',
    failureFlash : true
  });

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

