const fs = require('fs');
const path = require('path')

// console.log(path.join(__dirname + 'abc.txt'))
// console.log(__filename)

//console.log(path.normalize('mobio//'+ "yahii//"+ '\abc'))

// console.log(path.resolve('mobio/'+ "yahii/"+ '/abc'))

function readData(err, data) {
  
    if(err) {
        console.log(err);
        return;
    }
    let a = data.toString();

    console.log(a + "----")
}

//fs.readFile(path.join(__dirname + '/abc.txt'), readData);

const dataSync = fs.readFileSync(path.join(__dirname + '/abc.txt'));

console.log(dataSync.toString())

console.log("i am end")













// fs.readFile('./abc.txt');



