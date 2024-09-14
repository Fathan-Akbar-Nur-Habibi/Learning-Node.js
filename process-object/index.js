// This Content for Using initial memory
const initialMemoryUsage = process.memoryUsage().heapUsed;

// This Content for take name of argument based index-2
const yourName = process.argv[2]; 

// This Content take environment mode of environment variable
const environment = process.env.NODE_ENV; 

for(let i = 0; i<= 10000; i++){
//this looping process will create increase memory usage
}

//This Content take using memory after looping process
const currentMemoryUsage = process.memoryUsage().heapUsed;//TODO 4

// view of Information
console.log(`Hi ${yourName}`);
console.log(`Mode environment : ${environment}`);
console.log(`Using memory of ${initialMemoryUsage} increase to ${currentMemoryUsage}`);

// run command powershell 
// $env:NODE_ENV="development"; node ./process-object/index.js Fathan

// output in command powershell
// Hi Fathan
//Mode environment : development
//Using memory of 3886040 increase to 3887792