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

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:courseId', (req, res) => {
    const courseId = req.params.courseId;
    const course = courses.find( c => c.id === courseId);
    res.send(course);
});





// Listener
app.listen(port, () => {
    console.log(port)
});