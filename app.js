// app.js

const http = require('http');
const events = require('events');

// declare server variables
const hostname = '127.0.0.1';
const port = 8080;

//create an object of EventEmitter class from events module
const myEmitter = new events.EventEmitter();


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World mit Emitter und Funktion\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function c1() {
   console.log('Aufruf Funktion C1!');
}

function c2() {
   console.log('Aufruf Funktion C2!');

}


myEmitter.on('eventOne', c1); // Register for eventOne
myEmitter.on('eventTwo', c2); // Register for eventTwo
myEmitter.on('status', (code, msg)=> console.log(`Got ${code} and ${msg}`));

myEmitter.emit('eventOne');
myEmitter.emit('eventTwo');
myEmitter.emit('status', 233, 'landsberg Pflug');


console.log(myEmitter.rawListeners('eventTwo'));
console.log(myEmitter.listenerCount('eventTwo'));
