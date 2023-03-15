const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const users = require('./users.json')

app.use(express.json())

app.get('/', (req, res) => {
    console.log('hitting / routes')
    res.status(201).send('Sending response')
})

// app.get('/users', (req, res) => {
//     res.status(201).send(users)
//     console.log('executing after send')
// })

app.get('/users/:id/todos/:userid', (req, res) => {
    let { id } = req.params
    // console.log(req.params)
    console.log(id)
    res.status(200).send(users.find(u => u.id == id))
})

app.post('/users', (req, res) => {
    console.log(req.body)
    res.status(201).send(users)
})

app.listen(3000, ()=>console.log('express server is running on port 3000'))