const db = require('./firebaseInit');

const express = require('express')
const app = express()
 
app.get('/', function (req, res) {

    db.collection('employees').orderBy('dept').get().then((querySnapshot) => {
        let employees = [];
        querySnapshot.forEach((doc) => {
          const data = {
            'id': doc.id,
            'employee_id': doc.data().employee_id,
            'name': doc.data().name,
            'dept': doc.data().dept,
            'position': doc.data().position
          }
          employees.push(data)
        })

        res.send(employees)
      })
  
})
 
app.listen(3000)
