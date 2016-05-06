var express = require('express');
var router = express.Router();
var Event = require('../models/event');



router.get('/', function(req, res, next) {
  Event.find({}, function(err, events){
    if (err) throw err;
    console.log('events: ' + events);
  });
  res.render('calendar');
});

router.post('/', function(req, res, next){
  console.log(req.body);
  var newEvent = new Event();
  newEvent.title = req.body.title;
  newEvent.start = req.body.start;
  newEvent.end = req.body.start;
  newEvent.save(function(err) {
    if (err) throw err;
    console.log(newEvent);
    res.json({success: true, message: newEvent});
  });
});

//routes/calendar.js

router.get('/users/calendar/feed', function(req, res, next){
  Event.find({})
    .then(function(events){
      res.json(events);
    })
    .catch(function(err){
      next(err);
    });
});

// router.edit('/:id/feed', function(req, res, next){
//   Event.edit({})
//     .then(function(events){
//       res.json(events);
//     })
//     .update(function(err){
//       next(err);
//     });
// });

// router.delete('/:id/edit', function (req, res){
//     //find blob by ID
//     mongoose.model('Blob').findById(req.id, function (err, blob) {
//         if (err) {
//             return console.error(err);
//         } else {
//             //remove it from Mongo
//             blob.remove(function (err, blob) {
//                 if (err) {
//                     return console.error(err);
//                 } else {
//                     //Returning success messages saying it was deleted
//                     console.log('DELETE removing ID: ' + blob._id);
//                     res.format({
//                         //HTML returns us back to the main page, or you can create a success page
//                           html: function(){
//                                res.redirect("/blobs");
//                          },
//                          //JSON returns the item with the message that is has been deleted
//                         json: function(){
//                                res.json({message : 'deleted',
//                                    item : blob
//                                });
//                          }
//                       });
//                 }
//             });
//         }
//     });
// });


module.exports = router;
