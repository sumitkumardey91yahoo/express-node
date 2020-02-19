const express = require('express');
const app = express();
var session = require('express-session');
var cookieParser = require('cookie-parser')
var body_parser = require('body-parser')

var multer = require('multer');
var upload = multer();


app.use(upload.array()); 

app.use(body_parser.json())
app.use(body_parser.urlencoded({extended: true}))


app.use(cookieParser())


var item = 1;
app.use(session({
    secret: 'random_string_goes_here',
  }))

  app.post('/', (req, res) => {
   console.log(req)
    res.send(req.body)
  })


app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('sumit', '123')
    //req.session.sumit++;
    console.log(req.cookies)
    res.cookie('sumit', 'done')

    //res.send({name: item++})
    if(req.session.auth) {
        res.write(`<h1>i am success </h1><br>`);
    } else {
        res.write(`<h1>Hello ${item} </h1><br>`);
    }
    
    res.end();

})
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        console.log("done")
    })
    res.send("logout")
})

app.get('/login', (req, res) => {
     console.log("login",req.query)
    if(req.query) {
        const { u, p} = req.query;
         console.log(p)
        if (u === 'one' && p === '1') {
           req.session.auth = true;
           res.send("success") 
        }
    }

    res.send("fail") 

});



app.listen(1000);