const fs = require('fs');
const path = require('path');

// Determine path of notes.txt file
const filePath = path.join(__dirname,'notes.txt');

// Read notes.txt file
fs.readFile(filePath,'UTF-8',(err,data)=> {
    if(err) {
        console.error('failed reading file :', err);
        return;
    }

//view file notes.txt in console
console.log('file content notes.txt: ')
console.log(data);
});