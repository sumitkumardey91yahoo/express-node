const express = require('express');
const app = express();

app.get('/:age', (req, res) => {
  console.log("done", req.params.age);
  res.send(req.params.age)
})


app.listen(1000, () => {
    console.log("server started")
})






