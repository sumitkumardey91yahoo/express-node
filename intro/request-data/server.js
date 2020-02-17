const req = require('request');

req('https://geo.cloud.altbalaji.com/location/', (err, request, res) => {

    if(err) {
        return;
    }
    console.log(request.statusCode)
   
   var a = JSON.parse(res);

   a.city.names.en = "chennai";


   console.log(a)
     


})
