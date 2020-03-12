const express = require('express');
const router = express.Router();


router.get("/", (req, res) =>{

    res.send({type: 'i am movie home '})
})


router.get("/show", (req, res) =>{

    res.send({type: 'i am movie show '})
})


module.exports = router;


