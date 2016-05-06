var mongoose = require('mongoose');



var instructorSchema = new mongoose.Schema({
  name: { type: String, required: true},
          location: String,
          skills: String,
          email: String,
          profit:String

});


var Instructorlist = mongoose.model('instructorlist', instructorSchema);


module.exports = Instructorlist;
