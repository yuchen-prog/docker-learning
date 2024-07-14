"use strict";

const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
    fs.createReadStream('./index.html').pipe(res)
})
server.listen(3002, () => {
    console.log('listen 3002!')
})