var events = require('events')

var em = new events.EventEmitter();

em.on('FirstEvent', function(data){

    console.log("Event Fired: " + data);
});

em.emit('FirstEvent',"This is the event")