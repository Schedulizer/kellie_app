// // profile_controller.js
// // var Profile = require('../models/users.js');
// // var profiles = {};




// users.index = function(req, res) {
//   User.find({}, function(err,users){
//     if(err){
//       throw err;
//     }
//     res.json(users);
//   });
// };

// users.create = function(req, res) {
// var user = new User();

// user.user_name = req.body.user_name;
// user.email = req.body.email;
// user.friends = req.body.friends;
// user.age = req.body.age;
// console.log(user);

// user.save(function(err){
//   if(err){
//     throw err;
//   };
// res.json({sucess:true,message:'User created! pow'});
//   });
// };

// //create action to show a single user
// users.show = function(req, res) {
// User.find({email:req.params.email},function(err,user){
//   if (err){
//     throw err;
//   }
//   res.json(user);
// });
// };

// //create action to edit a single user

// users.update = function(req, res) {
// User.findOneAndUpdate({email:req.params.email},{email:req.body.email},function(err,user){

// });
// };


// //create action to delete a single user
// users.destroy = function(req, res) {
// User.findOneAndRemove({email:req.params.email},function(err,user){
//  if (err){
//     throw err;
//   }
//   res.json(user);
// });

// };
