const functions = require('firebase-functions');
const express = require('express');
const app = express();




const Mongo = require('mongodb');


const bodyParser = require('body-parser')


app.use(bodyParser.json())

const MongoClient =  Mongo.MongoClient;

const uri = "mongodb+srv://sumitkumardey91:sumit@1991@cluster0-u9py9.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useUnifiedTopology: true,  useNewUrlParser: true } );


client.connect(err => {
      
    console.log("erro", err)
  const db = client.db("mydb")


  app.get('/get', (req, res) => {
    db.collection('customers').find().toArray(function (err, result) {
      if (err) throw err
      console.log(result)
      res.send(result)
    })
  });

  app.post('/', (req, res) => {
   
    const data = req.body;
    db.collection('customers').insert(data);
    res.send("insert successfully");

  });
   app.delete('/', (req, res) => {
    const data = req.body;
    db.collection('customers').remove(data);
    res.send("delete successfully");
  });
 
  app.put('/', (req, res) => {
    const city = req.body.city;
    db.collection('customers').update({ "city": "BENGALURU" }, {$set: { "city": city}})
    res.send("update successfully");
  });

  // console.log(db)
  // db.collection('customers').insert({name: 'delhi'})
  // client.close();

  // db.collection('customers').find().toArray(function (err, result) {
  //   if (err) throw err
  //   console.log(result)
  // })

  // db.collection('customers').update({'name':'sumit kumar malda'},{$set:{'name':'sumit kumar'}}).then((err, result) => {
  //   //if (err) throw err

  //   db.collection('customers').find().toArray(function (err, result) {
  //       if (err) throw err
  //       console.log(result)
  //     })

  // })  


  //db.collection('customers').remove({address: 'bangalore'})


//   db.collection('customers').find().toArray(function (err, result) {
//         if (err) throw err
//         console.log(result)
// })

});


app.get('/sumit', (req, res) => {
  
    res.send({
        "name": "sumit00000"
    })
  })
  



exports.app = functions.https.onRequest(app);