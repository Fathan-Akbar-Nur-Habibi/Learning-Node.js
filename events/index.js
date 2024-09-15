// import variable EventEmitter of core module events
const { EventEmitter} = require('events');

// create myEmitter variable is instance of EventEmitter
const myEmitter = new EventEmitter();
const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}`) ; 
} 

const onbirthdayEventListener = ({name }) => {
    birthdayEventListener(name);
}

myEmitter.on('birthday', onbirthdayEventListener);
myEmitter.emit('birthday', {name : `Fathan`});