//create web server
const express = require('express')
const app = express()
//create web server

//create a route
//GET /comments
app.get('/comments', function (req, res) {
    res.send('This is a GET request')
})

//POST /comments
app.post('/comments', function (req, res) {
    res.send('This is a POST request')
})

//PUT /comments
app.put('/comments', function (req, res) {
    res.send('This is a PUT request')
})

//DELETE /comments
app.delete('/comments', function (req, res) {
    res.send('This is a DELETE request')
})

//start the server
app.listen(3000, function () {
    console.log('Server is running on http://localhost:3000')
})

//start the server
app.listen(3000, function () {
    console.log('Server is running on http://localhost:3000')
})