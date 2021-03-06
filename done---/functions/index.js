const express = require('express')
const functions = require('firebase-functions')
const app = express();
const db = require('./firebaseInit')
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
 
app.get('/emp', function (req, res) {

    db.collection('employees').orderBy('dept').get().then((querySnapshot) => {
        let employees = [];
        querySnapshot.forEach((doc) => {
          const data = {
            'id': doc.id,
            'employee_id': doc.data().employee_id,
            'name': doc.data().name,
            'dept': doc.data().dept,
            'position': doc.data().position
          }
          employees.push(data)
        })

        res.send(employees)
      })
  
})

app.post('/emp', function (req, res) {
  console.log("123")
  res.statusCode(200)
  res.send("data", req.body)
});


app.get('/sumit', (req, res) => {
  
    res.send({
        "name": "sumit"
    })
  })
  



exports.app = functions.https.onRequest(app);