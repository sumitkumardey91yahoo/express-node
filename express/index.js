const express = require('express')
const app = express();
var mysql = require('mysql')
//console.log(mysql)
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sumit@1991',
  database: 'college',
  port: "3306"
})

connection.connect()

console.log(__dirname)
app.use('/home', express.static('done'))

app.get('/', (req,res) => {
    res.send("ok");
})




connection.query('select * from user_details where user_id = 98', function (err, fields) {
  if (err) throw err

  console.log('The solution is: ', fields)
})

connection.end()

app.listen(8000, () => {

})