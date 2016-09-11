var http = require("http");
var fs = require("fs");
// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

http.createServer(function (request, response) {

  // Send the HTTP header 
  // HTTP Status: 200 : OK
  // Content Type: text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});
   
  // Send the response body as "Hello World"
  fs.readFile('Sample.txt', function (err, data) {
  	if (err) return console.error(err);
     	response.end(data.toString());
	});

	// listener #1
	var listner1 = function listner1() {
	   console.log('listner1 executed.');
	}

	// listener #2
	var listner2 = function listner2() {
	  console.log('listner2 executed.');
	}

	// Bind the connection event with the listner1 function
	eventEmitter.addListener('sample connection', listner1);

	// Bind the connection event with the listner2 function
	eventEmitter.on('sample connection', listner2);

	var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'sample connection');
	console.log(eventListeners + " Listner(s) listening to connection event");

	// Fire the connection event 
	eventEmitter.emit('sample connection');

	// Remove the binding of listner1 function
	eventEmitter.removeListener('sample connection', listner1);
	console.log("Listner1 will not listen now.");

	// Fire the connection event 
	eventEmitter.emit('sample connection');

	eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'sample connection');
	console.log(eventListeners + " Listner(s) listening to connection event");

}).listen(3000);