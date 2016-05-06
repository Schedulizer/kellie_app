var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');


//TODO make tis work with passport local
// https://github.com/jaredhanson/passport-local
var instructorSchema = new mongoose.Schema({
  username   : String,
  password    : String,
  email       : String,
  role        : String
});

instructorSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

instructorSchema.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

var Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;

