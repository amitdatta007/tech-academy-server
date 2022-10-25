const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const catagory = require('./data/categories.json');
const courses = require('./data/courses.json');

// PORT
const port = process.env.PORT || 5000;

// API
app.get('/', (req, res) => {
    res.send('Tech Academy Server.');
});

app.get('/catagory', (req, res) => {
    res.send(catagory);
});





// Listener
app.listen(port, () => {
    console.log(port)
});