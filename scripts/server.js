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
const app = express();
//app.get('/', (req, res) => {
//  res.send('Hello World');
//});

// From Original start.js script 
concurrently([
    { command: 'node scripts/sb-watch.js', name: 'SB_WATCH', prefixColor: 'bgBlue.bold' },
    {
        command: `"${browserSyncPath}" --reload-delay 2000 --reload-debounce 2000 dist -w --no-online`,
        name: 'SB_BROWSER_SYNC',
        prefixColor: 'bgGreen.bold',
    }
], {
    prefix: 'name',
    killOthers: ['failure', 'success'],
}).then(success, failure);

function success() {
    console.log('Success');
}

function failure() {
    console.log('Failure');
}


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);








