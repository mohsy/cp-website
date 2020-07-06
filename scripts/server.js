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
const path = require("path");
const app = express();
//app.get('/', (req, res) => {
  //res.send('Hello World');
//});

//Serve website
app.use(express.static(path.join(__dirname, "dist/index.html", "public")));
#app.use("dist/html.index", express.static(path.join(__dirname, "public")))



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);








