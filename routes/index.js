var express = require('express');
var router = express.Router();
var instructorController = require('../controllers/instructor_controller.js');
var nodemailer = require('nodemailer');
var favicon       = require('serve-favicon');
var Instructor = require('../models/inst_to_sel.js');
var bodyParser    = require('body-parser');
var mongoose = require('mongoose');
var profileController = require('../controllers/profile_controller.js');

//node mailer variable used in the send route
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "blackhattest99@gmail.com", //these should be replaced with the email that is going to be used
        pass: "blackhattingaround1"
    }
});



/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index');
console.log("this is the root route that goes to index and renders it");

});

//create routes for instructorlist
router.route('/instructorlist')
.get(instructorController.index)
.post(instructorController.create)
//.put(usersController.update)

//slick way to just see all the instructors listed
router.route('/showinstructorlist')
.get(instructorController.show)


router.route('/:email')
.delete(instructorController.destroy)


// ++++++++++++routes for singluar button action
router.get('/send/:id',function(req,res){

console.log("route /send/:id hit+++");

    var id = req.params.id;
    var email = "";
    var name = "";

console.log("vars passed+++");

//this is in the controller now - maybe its the way to do it?
  Instructor.findById(req.params.id, function(err, instructor){
    email = instructor.email;
    name = instructor.name;

//this is part of the nodemailer, but because  the instructor.finbyid takes time, I had to put it in the whole function, otherwise it was taking time to run and the email was not being found when the nodemailer needed to mail
    var mailOptions={

        //to : req.query.to,  //this is to pull from the form, but I am hardcoding
        to: email, //this needs to be the instructor email
        subject : "Invite to GA Schedulizer APP - Please select a time",
        text : "This is a link to whereever the app will reside please log in and select a time at:<link>"
    };

    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sentto " + email);
        res.end("sent");
         }
         console.log(email);
});

  });





});




//+++++++++++++this is the route to send custom emails

router.get('/sendemail',function(req,res){
    var mailOptions={
        to : req.query.to,  //this is to pull from the form, but I am hardcoding
        subject : req.query.subject,
        text : req.query.text
    };


    console.log(mailOptions);

    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});







module.exports = router;

