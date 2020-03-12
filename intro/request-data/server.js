const req = require('request');

req('https://geo.cloud.altbalaji.com/location/', (err, header, body) => {

  console.log("header", header.statusCode)

  // console.log("header", typeof body)

  const parse = JSON.parse(body)

  console.log(parse.city.names)




})
