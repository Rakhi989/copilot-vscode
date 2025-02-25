//create web server
const express = require('express');
const app = express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = 3000;

// list of comments
let comments = [
  { id: 1, body: "Hello world" },
  { id: 2, body: "My first comment" },
  { id: 3, body: "This is great" },
  { id: 4, body: "I love this" }
];

// get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// get comment by id
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  if (!comment) return res.status(404).send('The comment with the given ID was not found');
  res.json(comment);
});

// post a new comment
app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,
    body: req.body.body
  };
  comments.push(comment);
  res.json(comment);
});

// listen to port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});