const path = require('path');
const express = require('express');

const app = express();

const publicPath = path.join(__dirname, '../public');

console.log(publicPath);
const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})