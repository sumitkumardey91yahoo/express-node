var cron = require('node-cron');
const express = require('express')
const mysql = require('mysql')
const email  = require('./email');
const app = express();






const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sumit@1991',
    database: 'college'
});
connection.connect((err, res) => {
    if(!err) {
        console.log("connect")
    } else {
        console.log("not connect")
    }
})

app.get('/', (req, res) => {
    const sql = 'select * from user_details';
    connection.query(sql, (err, row) => {
      if(err) {
          throw new Error('not found')
      }
     res.send(row)
    })
})

function send() {

    const sql = 'select * from user_details where status = 0';
    connection.query(sql, (err, row) => {
      if(err) {
          throw new Error('not found')
      }
      console.log(row.length)
      if (row.length) {
          let str = ""
       row.forEach(element => {
           str += "name: " + element.username + "---"
       });

        email(str)
      }
  
    })
}


cron.schedule('* * * * *', () => {
    console.log('running a task every minute');
    send();

  });

app.listen(9000)