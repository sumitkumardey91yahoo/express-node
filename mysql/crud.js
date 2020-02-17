// crud operation

const express = require('express');
const router = express.Router();  // express()

router.get('/movie', (req, res) => {
  res.status(200);  
  res.send("i am from router");
})


module.exports = router;



