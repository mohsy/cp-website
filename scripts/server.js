'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


//Constatnts from original start.js 
const concurrently = require('concurrently');
const upath = require('upath');

const browserSyncPath = upath.resolve(upath.dirname(__filename), '../node_modules/.bin/browser-sync');

// App
//const app = express();
//app.get('/', (req, res) => {
  //res.send('Hello World');
//});

app.use(express.static(path.join(__dirname, "dests/html.index", "public")

//Serve website

// From Original start.js script 

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);








