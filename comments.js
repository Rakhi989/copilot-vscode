//create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/comments', (req, res) => {
    fs.readFile('./comments.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading comments.json');
            return;
        }

        res.send(data);
    });
});

app.post('/comments', (req, res) => {
    const newComment = req.body;

    fs.readFile('./comments.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading comments.json');
            return;
        }

        const comments = JSON.parse(data);
        comments.push(newComment);

        fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
            if (err) {
                res.status(500).send('Error writing comments.json');
                return;
            }

            res.send('Comment added!');
        });
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});