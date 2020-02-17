const functions = require('firebase-functions');
const express = require('express');
const app = express();



app.get('/sumit', (req, res) => {
  
    res.send({
        "name": "sumit"
    })
  })
  
app.get('/:age', (req, res) => {
  console.log("done", req.params.age);
  res.send(req.params.age)
})



app.listen(1000, () => {
    console.log("server started")
})

exports.app = functions.https.onRequest(app);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
