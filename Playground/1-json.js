const fs = require('fs');

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.JSON', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.JSON');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data.title);

//challenge
const dataBuffer = fs.readFileSync('1-json.JSON');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'Robinson';
data.age = 32;

const userJSON = JSON.stringify(data);
fs.writeFileSync('1-json.JSON', userJSON);

console.log(data.name);
console.log(data.planet);
console.log(data.age);
