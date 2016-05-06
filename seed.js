var db    = require('./config/db');
var Event = require('./models/event');

console.log('removing events...');
Event.remove({}, function(){
  console.log("Creating events...");
  Event.create({title: "My Bday Party!", start: "2016-05-11"}).then(process.exit);
});

