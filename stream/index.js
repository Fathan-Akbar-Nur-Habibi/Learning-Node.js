const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');

// specify paths for input and output files

const inputFilePath = path.join(__dirname, 'input.txt');
const outputFilePath = path.join(__dirname,'output.txt');

// define buffer size for readable stream
const highWaterMark = 15;

// create a readable stream to read from the input.txt file
const readableStream = fs.createReadStream(inputFilePath, {highWaterMark});

// Create a transform stream to add a newline ('\n') after every 15-character section

const transformStream = new Transform({
    transform(chunk, encoding, callback) { 
       // Convert buffer to string and add newline
       const chunkString = chunk.toString();
       const transformedChunk = chunkString.replace(/(.{15})/g, '$1\n');
       callback(null, transformedChunk);
    }
});

// create a writable stream to write to the output.txt file

const writableStream = fs.createWriteStream(outputFilePath);

// connect streams

readableStream.pipe(transformStream).pipe(writableStream);

writableStream.on('finish', () => {
    console.log('Text successfully written to output.txt')
});