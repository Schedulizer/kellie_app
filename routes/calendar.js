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

router.get('/feed', function(req, res, next){
  Event.find({})
    .then(function(events){
      res.json(events);
    })
    .catch(function(err){
      next(err);
    });
});

module.exports = router;
