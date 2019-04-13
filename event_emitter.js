var events = require('events'); // events module

var eventEmitter = new events.EventEmitter(); // Event emitter object

//Create an event handler:
var myEventHandler1 = function () {
  console.log('I am Guhan');
}


var myEventHandler2 = function () {
  console.log('Welcome to Chennai');
}

//Assign the eventhandler to an event:
eventEmitter.on('event1', myEventHandler1);
eventEmitter.on('event2', myEventHandler2);


//Fire the 'scream' event:
eventEmitter.emit('event1');
eventEmitter.emit('event2');



