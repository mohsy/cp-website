const concurrently = require('concurrently');
const upath = require('upath');

const browserSyncPath = upath.resolve(upath.dirname(__filename), '../node_modules/.bin/browser-sync');

# const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

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

//Start the server
app.listen(port, () => console.log(`Monolith listening on port ${port}!`));
