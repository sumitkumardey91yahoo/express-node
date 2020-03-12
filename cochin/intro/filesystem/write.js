const fs = require('fs');
const path = require('path')


function appenddata(err) {

  console.log(err)
}

fs.writeFile(path.join(__dirname + '/abc_mobiotics10000.txt'), "1000" , appenddata);

fs.writeFileSync