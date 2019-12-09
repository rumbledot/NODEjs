// npm init create package.json
// npm i express for .ejs file
// npm i body-parser POST GET request handle
// npm i mongoose mongoDB handler
// npm i concurrently local server able to run multiple nodejs app
// npm i -D nodemon will automatically handle updated production files and refresh the server
// keys.js a setup file for DB connection
// setup a schema Item.js
// create client folder
// goto the folder and install react using "create-react-app ."
// add "proxy":"localhost:5000" in the react package.json
// npm run dev
// look to index.js at client/src
// npm i bootstrap reactstrap installing bootstrap for react
// npm i uuid react-transition-group use to generate id and animation css
// npm i redux react-redux redux-thunk use for database management

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

// connect to DB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected..'))
    .catch(err => console.log(err));

// use Routes
app.use('/api/items', items);

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server start on port ${port}`));

// npm run server