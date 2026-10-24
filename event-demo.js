
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// // Listen for an event
// eventEmitter.on('greet', () => {
//   console.log('Hello! Welcome to Node.js.');
// });

// // Trigger the event
// eventEmitter.emit('greet');

// eventEmitter.on('userLogin', (username) => {
//   console.log(`${username} logged in successfully.`);
// });

// eventEmitter.emit('userLogin', 'Sameer');
// ..................................................................................
// Use once() when you want a listener to run only one time.

eventEmitter.once('welcome', () => {
  console.log('Welcome!');
});

eventEmitter.emit('welcome');
eventEmitter.emit('welcome');


// ........................................................................................

// Multiple listeners
// One event can have multiple listeners. They execute in registration order when the event is emitted.

eventEmitter.on('orderPlaced', () => {
  console.log('Send confirmation email.');
});

eventEmitter.on('orderPlaced', () => {
  console.log('Update order tracking.');
});

eventEmitter.emit('orderPlaced');


// ..................................................................

// Remove an event listener
// Use off() to remove a listener. You must pass the same function reference that you registered.




