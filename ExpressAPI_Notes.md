# Making an endpoint in Express

## Reference of instructor Connors' GitHub file: https://github.com/simratbains-223/module-4-express-api-personal/blob/master/index.cjs#L28
## Reference to API website from class lecture: https://the-one-api.dev/documentation


### The Process

1. Type `npm init -y`
2. Type `npm i express`
3. Type `git init`
4. Type `node app.js` - name of JS file 
5. Open Insomnia App
6. Name the new collection
7. Input the URl to see if I get a response
8. Type `npm i body-parser`

<mark>Remember: if I make a change after starting Node then I have to reset the terminal with `control + c` </mark>

9. Type `npm i -g nodemon` (to install nodemon) - but I already have it installed
10. Type `nodemon app.js`
11. `.env` file goes inside the `.gitignore`
12. Type `npm i dotenv` to install package for importing `.env` file
<hr>

```javascript
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
```
<hr>

### Notes

- REST APIs are transactional 

- The `req` sends a request for `.json` data

- The `res` sends a `.json` object back

- Practice removing the response object `response.json(books)` and click the Send button again in Insomnia to see the result. 

- Practice modifying the code and using the other method options in Insomnia e.g., ...

- Nodemon is useful because if I make a change it automatically restarts

- Standard ports for backend is 3000, 8080, etc. 

- Environment variables are usually things that are not directly in the code for security and/or convenience reasons e.g., when in collaboration with others who may not want to run the code on the same port you put the port as a variable in the `.env` file

- Put important keys in the `.env` file to avoid security vulnerabilities

- When trouble shooting error messages be sure to read them, use an AI search engine to look for answers, if that doesn't work ask a classmate, and as a last resort I may ask the instructor. 
*/


