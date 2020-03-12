const express = require('express');
const router = express.Router();
const parser = require('body-parser');
const multer = require('multer');

router.use(multer().array()); // form data

router.use(parser.json()); // json

router.use(parser.urlencoded({extended: true})) // url encoding


router.get("/:id", (req, res) =>{
    res.send(req.params)
})


router.get("/show", (req, res) =>{
    res.send({type: 'i am player show '})
})


router.post('/submit', (req, res) => {

    console.log(req.body)
   
    res.send(req.body)

})

module.exports = router;
