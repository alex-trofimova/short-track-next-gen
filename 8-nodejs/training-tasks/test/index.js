const fs = require('fs');
const path = require('path');
console.log('test2');

const inputFile = process.argv[2];
const outputFile = process.argv[3];

const readFile = async (path) => {
    return new Promise( (resolve, reject) => 
        fs.readFile(path, {encoding: 'utf-8'}, (error, data) => {
            error ? reject(error.message) : resolve(data);
        }))
};

const writeFile = async (path, data) => {
    return new Promise( (resolve, reject) => 
        fs.writeFile(path, data, (error) => {
            error ? reject(error.message) : resolve();
        }))
};



readFile(path.resolve(__dirname, inputFile))
    .then((data) => writeFile(path.resolve(__dirname, outputFile), data))
    .catch((error) => console.log(error));
