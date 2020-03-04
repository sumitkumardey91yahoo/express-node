// crud operation

const express = require('express');
const router = express.Router();  // express()








router.get('/movie', (req, res) => {

  console.log(req.headers.auth)

  if(req.headers.auth === "abc") {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);  
    res.send("i am from router");
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.status(401);  
    res.send("not found");
  }
})


module.exports = router;



