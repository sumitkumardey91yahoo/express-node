const Events = require('events');
const eventEmitter = new Events();


eventEmitter.on('e-data', (data) => {
    console.log("2---", data);
    console.log("3---", data);
    console.log("5----", data);

})

eventEmitter.on('e-data', (data) => {
    console.log("1", data);
})

eventEmitter.on('e-data', (data) => {
    console.log("3", data);
})



eventEmitter.emit('e-data', 100);  // 1

eventEmitter.emit('e-data', 100);  // 2







