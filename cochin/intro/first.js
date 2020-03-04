const sub = require('./sub');
const add = require('./add');

console.log(add.counter)

console.log("add", add.add(7, 3))
console.log("sub", sub(7, 3))
