const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const uri = "mongodb+srv://sumitkumardey91:sumit@1991@cluster0-u9py9.mongodb.net/test?retryWrites=true&w=majority";


// mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }).then(() => {
//   console.log("connect")
// }).catch(() => {
//   console.log("pl")
// })



const client = new MongoClient(uri, { useUnifiedTopology: true,  useNewUrlParser: true } );
client.connect(err => {
  const db = client.db("mydb")

  console.log(db)
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


  db.collection('customers').find().toArray(function (err, result) {
        if (err) throw err
        console.log(result)
})

});