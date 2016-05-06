var instructorController = {};
var instructor = require('../models/instructor');
var passport = require('passport');
require('../config/passport')(passport);

instructorController.index = function(req, res) {
   Instructor.find({}, function(err, instructors) {
    if (err) {
      throw err;
    }
    res.json(instructors);
  });
};

// make new Instructor and new Producer
instructorController.new = function(req, res) {
  // different views for instructors and producers
  res.render('instructorSignup');
};

// make create Instructor and create Producer
instructorController.create = function(req, res) {
  var signUpStrategy = passport.authenticate('local-signup', {
    successRedirect: '/calendar',
    failureRedirect: '/users/restricted',
    failureFlash: true
  });

  return signUpStrategy(req, res);
};

instructorController.getLogin = function(request, response) {
  response.render('login2.ejs', { message: request.flash('loginMessage') });
};


instructorController.postLogin = function(request, response) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/users/calendar',
    failureRedirect : '/users/restricted',
    failureFlash : true
  });
  console.log('loginProperty');
  return loginProperty(request, response);
};

instructorController.getLogout = function(request, response) {
  request.logout();
  response.redirect('/');
};

instructorController.update = function(req, res) {};

instructorController.show = function(req, res) {};

instructorController.edit = function(req, res) {};

instructorController.destroy = function(req, res) {};

module.exports = instructorController;

