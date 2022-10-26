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
app.get('/catagory/:catagoryId', (req, res) => {
    const catagoryId = req.params.catagoryId;
    if(catagoryId === '06'){
        res.send(courses);
    };
    const course = courses.filter(c => catagoryId === c.catagoryId);
    res.send(course);
});

app.get('/course/:courseId', (req, res) => {
    const courseId = req.params.courseId;
    const course = courses.find(c => courseId === c.id);
    res.send(course);
});

// Listener
app.listen(port, () => {
    console.log(port)
});