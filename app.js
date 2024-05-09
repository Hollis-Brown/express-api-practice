
const express = require('express');
const bodyParser = require('body-parser');

// Allows me to access the `.env` file
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

// Makes Express parse the JSON body of any request and adds the body to the req object - known as middleware to look at the request body
app.use(bodyParser.json());


app.get('/book', (request, response) => {
  const books = [
    {
    title: 'The Hunger Games'
    },
    {
    title: 'The Hobbit'
    },
    {
    title: 'The Bible'
    }
  ];
  response.json(books);
});

app.post('/book', (request, response) => {
  const newBook = request;

//  console.log('newBook, newBook');

  response.json('Success!');
});

// Change 3000 to `process.env.PORT`
app.listen(process.env.PORT, () => console.log('Listening on port 3000'));
