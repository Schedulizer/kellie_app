//var instructorController = {};
//this is the instructor list requires that operate the instructor
var Instructorlist = require('../models/inst_to_sel.js');
var instructorslist = {};


//this the instructor list actions

//create action to display all users
instructorslist.index = function(req, res) {

  var instructorslist = Instructorlist.find({}, function(err,instructorslist){
    if(err){
      throw err;
    }
    //res.json(instructorslist);
    res.render('instructor_list_page',{instructorslist:instructorslist});
  });
};

//using this to show the list of instructorslist on /instructorlist
instructorslist.show = function(req, res) {
  var instructorslist = Instructorlist.find({}, function(err,instructorslist){
    if(err){
      throw err;
    }
    res.json(instructorslist);
    //res.render('instructor_list_page',{instructorslist:instructorslist});
  });

};



//instructor list create function
instructorslist.create = function(req, res) {
var instructor = new Instructorlist();

instructor.name = req.body.name;
instructor.skills = req.body.skills;
instructor.location = req.body.location;
instructor.email = req.body.email;
instructor.profit = req.body.profit;
console.log(instructor);

instructor.save(function(err){
  if(err){
    throw err;
  };
res.json({sucess:true,message:'Instructor created! pow'});
  });
};


//action created to destroy the instructor account
instructorslist.destroy = function(req, res) {
Instructorlist.findOneAndRemove({email:req.params.email},function(err,user){
 if (err){
    throw err;
  }
  res.json(user);
  console.log("account removed");
});

};




module.exports = instructorslist;


















// instructorController.index = function(req, res) {};

// instructorController.new = function(req, res) {};

// instructorController.create = function(req, res) {};

// instructorController.update = function(req, res) {};

// instructorController.show = function(req, res) {};

// instructorController.edit = function(req, res) {};

// instructorController.destroy = function(req, res) {};

//module.exports = instructorController;

