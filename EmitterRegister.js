const Emitter = require('./Emitter');
const emitter = new Emitter();

emitter.on('save', () => {
  console.log('Evento OnSave Activado 1');
});

emitter.on('save', () => {
  console.log('Evento OnSave Activado 2');
});


module.exports = emitter;