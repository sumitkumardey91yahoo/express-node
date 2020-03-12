const fs = require('fs');
const path = require('path')

function appenddata(err) {
    console.log(err)
    // if (err === null) {

    //     console.log("error")
    //     return;
    // }

    console.log("success")
  

    const dataSync = fs.readFileSync(path.join(__dirname + '/abc.txt'));

    console.log(dataSync.toString())
  
}

console.log(path.join(__dirname + '/abc.txt'))

fs.appendFile(path.join(__dirname + '/abc.txt'), "1000" , appenddata);