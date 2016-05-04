var express = require('express');
var router = express.Router();
var Event = require('../models/event');



router.get('/', function(req, res, next) {
  Event.find({}, function(err, events){
    if (err) throw err
    console.log('events: ' + events)
  });
  res.render('calendar');
});

router.post('/', function(req, res, next){
  console.log(req.body);
  var newEvent = new Event();
  newEvent.title = req.body.title;
  newEvent.start = new Date(2016, 04, 10);
  newEvent.end = new Date(2016, 04, 10);
  newEvent.save(function(err) {
    if (err) throw err;
    console.log(newEvent)
    res.json({success: true, message: newEvent});
  });
});

module.exports = router;

