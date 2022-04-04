const express = require('express');
const data = require('./data.js');

const app = express();
app.get('/api/categories', (req, res) => { 
    res.send(data.categories);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));