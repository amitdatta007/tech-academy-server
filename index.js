const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const courses = require('./data/courses.json');

// PORT
const port = process.env.PORT || 5000;

// API
app.get('/', (req, res) => {
    res.send('Tech Academy Server.');
});





// Listener
app.listen(port, () => {
    console.log(port)
});