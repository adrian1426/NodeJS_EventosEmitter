const { EventEmitter } = require('events');
const { SAVE_TYPE } = require('./events/eventsType');

const emitter = new EventEmitter();

emitter.on(SAVE_TYPE, () => {
  console.log('Evento OnSave Activado 1');
});

emitter.on(SAVE_TYPE, () => {
  console.log('Evento OnSave Activado 2');
});


module.exports = emitter;