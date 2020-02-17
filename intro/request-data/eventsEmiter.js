var Events = require('events'); // gave class
const eventEmiter = new Events();

eventEmiter.on('send-data', (a) => {
    console.log('receive', a.age)
})

eventEmiter.emit('send-data', { age: 100 });







