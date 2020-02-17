const express = require('express');
const app = express();
const mysql = require('mysql');
const crud = require('./crud.js')
const BodyParse = require('body-parser'); 

app.use(BodyParse.json())


// router creating process
app.use('/crud', crud);



// global and custom middleware
app.use( '/students' ,(req, res, next) => {
  console.log("i am global middleware", req.url, req.query);
 const { name } = req.query;
 if(name === 'mob') {
  next();
 } else {
   res.json({error: 'i am invalid user'})
 }
 
});
app.use('/photos', express.static('images'));
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
  console.log("home");
  res.send({name: 'mobiotics'})
});

app.get('/students', (req, res) => {
  const sql = 'select * from user_details';
  connection.query(sql, (err, row) => {
    if(err) {
        throw new Error('not found')
    }
   res.send(row)
  })
})


app.get('/student/:single/:gender', (req, res) => {
    const { single, gender } = req.params;
     console.log("student", single)
    const sql = 'select * from user_details where user_id = ? and gender = ?';
    connection.query(sql, [single, gender], (err, row) => {
      if(err) {
          throw new Error('not found')
      }

      if(row.length === 0) {
        row = {error: 'not matched'}
      } 

      res.send(row)
     
    })
  })

  app.put('/student', (req, res) => {
    const {user_id, username} = req.body;

    const sql = 'update user_details set username = ? where user_id = ?'
    
    connection.query(sql, [username, user_id], (error, response) => {

      console.log("response", response.affectedRows)
      if(error) {
        res.status(400);
        res.send({status: 'bad request'})
      }
      if(!(response  && response.affectedRows)) {
        res.status(400);
        res.send({status: 'not updated'})
      }



      
      res.status(200);
      res.send({status: 'success'})
    })


  });


app.listen(9000, () => {
    console.log("i am started");
});


