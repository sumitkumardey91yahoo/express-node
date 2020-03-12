const express = require('express');
const app = express();
const player = require('./routers/player')
const movie = require('./routers/movie')



app.use('/player', player)
app.use('/movie', movie)
app.get('/', (req, res) => {
     res.send(
       {type: 'home'}
       );
})




   

app.get('/:type/:id', (req, res) => {
 console.log("req.params", req.params)

 console.log("req.query", req.query)
  res.send(
    req.query
    );
})





app.listen('9000', (status) => {
   console.log("9000 started")
});




