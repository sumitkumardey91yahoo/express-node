var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
// start server  sudo /Users/pantheratigris/Documents/database-mongo/mongodb/bin/mongod --dbpath=/Users/pantheratigris/Documents/database-mongo/mongo-data

MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function(err, db) {
  if (err) throw err;
  console.log("Database created!");

   var dbo = db.db("mydb");
  // var myobj = { name: "Company Inc", address: "Highway 37" };
  // dbo.collection("customers").insertOne(myobj, function(err, res) {
  //   if (err) throw err;
  //   console.log("1 document inserted");
  //   db.close();
  // });

  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });


});

